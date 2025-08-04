import FriendList from "./FriendList";
import friends from "./friends.json";

function App() {
  return (
    <div>
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
