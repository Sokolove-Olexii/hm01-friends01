import styled from "styled-components";

const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Status = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${(props) => (props.$isOnline ? "#4caf50" : "#f44336")};
`;

const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;

const Name = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`;

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status $isOnline={isOnline} />
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

export default FriendListItem;
