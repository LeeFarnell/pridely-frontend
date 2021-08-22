import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import Button from "../../components/button";
import { SEND_MESSAGE } from "../../mutations";
import { GET_CHAT } from "../../queries";
import { useUserContext } from "../../contexts/UserProvider";
import { useForm } from "react-hook-form";

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
  console.log(data);

  console.log(state.user.id, "from user");
  console.log(id, "to user");

  const [createMessage] = useMutation(SEND_MESSAGE, {
    onCompleted: () => {},
    onError: () => {},
  });

  const onSubmit = async (formData) => {
    console.log(formData);
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
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  console.log(data.chat);

  return (
    <div>
      <div>
        {data.chat && (
          <h2>Your conversation with {data.chat[0].toUser.username}</h2>
        )}
        {!data.chat && <h2>Start a conversation!</h2>}
      </div>
      {data.chat && (
        <div>
          {data.chat.map((message) => {
            return (
              <div className="chat-message">
                <div>{message.fromUser.username}: </div>
                <div>{message.message}</div>
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
