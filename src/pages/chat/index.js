import { useQuery } from "@apollo/client";
import { GET_CHAT } from "../../queries";

const Chat = () => {
  const { loading, error, data } = useQuery(GET_CHAT, {
    variables: {
      chatToUserId: "611eae8ed1c5f00b7435476e",
      chatFromUserId: "611eae8ed1c5f00b7435476d",
    },
    pollInterval: 500,
  });

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }
  console.log(data.chat);

  return <div>Chat</div>;
};

export default Chat;
