import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import Button from "../../components/button";
import { SEND_MESSAGE } from "../../mutations";
import { GET_CHAT } from "../../queries";
import { useUserContext } from "../../contexts/UserProvider";

const Chat = () => {
  const { id } = useParams();
  const { state } = useUserContext();

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

  const onSubmit = async () => {
    try {
      await createMessage({
        variables: {
          createMessageFromUser: state.user.id,
          createMessageToUser: id,
          createMessageMessage: "sadssadsadasalkfdlskdl keybord smash",
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

  const chatTitle = () => {
    if (data.chat[0].toUser.username) {
      return `Your message to ${data.chat[0].toUser.username}`;
    } else {
      return `Start a conversation`;
    }
  };

  return (
    <div>
      <div>
        <h2>{chatTitle()}</h2>
      </div>
      <div>
        {data.chat.map((message) => {
          return (
            <div>
              <div></div>
              <div></div>
              <div>{message.message}</div>
            </div>
          );
        })}
      </div>
      <div>
        <textarea
          className="chat-input"
          placeholder="Enter your message here"
          required
        ></textarea>
      </div>
      <Button
        name="Send"
        onClick={() => {
          onSubmit();
        }}
      />
    </div>
  );
};

export default Chat;
