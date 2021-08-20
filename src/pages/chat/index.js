import { useQuery, useMutation } from "@apollo/client";
import Button from "../../components/button";
import { SEND_MESSAGE } from "../../mutations";
import { GET_CHAT } from "../../queries";

const Chat = () => {
  const { loading, error, data } = useQuery(GET_CHAT, {
    variables: {
      chatToUserId: "611eae8ed1c5f00b7435476e",
      chatFromUserId: "611eae8ed1c5f00b7435476d",
    },
    pollInterval: 500,
  });

  const [createMessage] = useMutation(SEND_MESSAGE, {
    onCompleted: () => {},
    onError: () => {},
  });

  const onSubmit = async () => {
    try {
      await createMessage({
        variables: {
          createMessageFromUser: "611eae8ed1c5f00b7435476e",
          createMessageToUser: "611eae8ed1c5f00b7435476d",
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
