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

  return (
    <div>
      <div>
        {data.chat.map((message) => {
          return <div>{message.message}</div>;
        })}
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
