// FriendList.js
import styled from "styled-components";
import FriendListItem from "./FriendListItem";

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 300px;
  margin: 0 auto;
`;

const FriendList = ({ friends }) => {
  return (
    <List className="friend-list">
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </List>
  );
};

export default FriendList;
