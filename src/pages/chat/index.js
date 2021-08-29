import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import Button from "../../components/button";
import { SEND_MESSAGE } from "../../mutations";
import { GET_CHAT } from "../../queries";
import { useUserContext } from "../../contexts/UserProvider";
import LoadingSpinner from "../../components/loading";
import ErrorMessage from "../../components/error-message";

import "./index.css";

const Chat = () => {
  const { id } = useParams();
  const { state } = useUserContext();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { loading, error, data } = useQuery(GET_CHAT, {
    variables: {
      chatFromUserId: state.user.id,
      chatToUserId: id,
    },
    pollInterval: 500,
  });

  const [createMessage] = useMutation(SEND_MESSAGE, {
    onCompleted: () => {},
    onError: () => {},
  });

  const onSubmit = async (formData) => {
    try {
      await createMessage({
        variables: {
          createMessageFromUser: state.user.id,
          createMessageToUser: id,
          createMessageMessage: formData.message,
        },
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage returnTo={"/"} />;
  }

  return (
    <div className="chat-container">
      <div>
        {!data.chat[0] ? (
          <h2>Start a conversation!</h2>
        ) : (
          <h2>Your conversation with {data.chat[0].toUser.username}</h2>
        )}
      </div>
      {data.chat && (
        <div>
          {data.chat.map((message) => {
            return (
              <div>
                {state.user.id === message.fromUser.id ? (
                  <div className="chat-message">
                    <div className="chat-user">
                      <img
                        src={message.fromUser.profilePicture}
                        className="chat-image"
                        alt={message.fromUser.username}
                      />
                      <h3>{message.fromUser.username}</h3>
                    </div>
                    <hr />
                    <div>{message.message}</div>
                  </div>
                ) : (
                  <div className="other-chat-message">
                    <div className="other-chat-user">
                      <img
                        src={message.fromUser.profilePicture}
                        className="chat-image"
                        alt={message.fromUser.username}
                      />
                      <h3>{message.fromUser.username}</h3>
                    </div>
                    <hr />
                    <div>{message.message}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
      <form className="chatForm" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <textarea
            className="chat-input"
            placeholder="Enter your message here"
            required
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <Button name="Send" type="submit" />
      </form>
    </div>
  );
};

export default Chat;
