import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import Button from "../../components/button";
import { SEND_MESSAGE } from "../../mutations";
import { GET_CHAT } from "../../queries";
import { useUserContext } from "../../contexts/UserProvider";

const Chat = () => {
  const { state } = useUserContext();
  console.log(state.user.id);

  // TODO: get second user dynamically

  const { loading, error, data, startPolling } = useQuery(GET_CHAT, {
    variables: {
      chatFromUserId: state.user.id,
      // 612010453e86042ec0b99bc0
      chatToUserId: "612010453e86042ec0b99bc2",
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
          createMessageFromUser: state.user.id,
          createMessageToUser: "612010453e86042ec0b99bc0",
          createMessageMessage: "sadssadsadasalkfdlskdl keybord smash",
        },
      });
      startPolling();
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
          return <div>messaaaage</div>;
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
