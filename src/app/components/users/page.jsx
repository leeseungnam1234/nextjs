import React, { useState } from "react";
import User from "../User/page";
import { useUsersDispatch, useUsersState } from "../UsersContext/page";

const Users = () => {
  const [userId, setUserId] = useState(null);
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  const { loading, data: users, error } = state.users;
  const fetchData = () => {
    getUsers(dispatch);
  };

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>{`에러가 발생했습니다.${error}`}</div>;
  if (!users) return <button onClick={fetchData}>불러오기</button>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            style={{ cursor: "pointer" }}
            onClick={() => setUserId(user.id)}
          >
            {user.username}({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchData} style={{ margin: "10px 0 0 10px" }}>
        다시불러오기
      </button>
      {userId && <User id={userId} />}
    </>
  );
};

export default Users;
