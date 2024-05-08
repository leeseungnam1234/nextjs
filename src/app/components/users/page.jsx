import React, { useState } from "react";
import axios from "axios";
import { useAsync } from "react-async";
import User from "../user/page";

async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

const Users = () => {
  const [userId, setUserId] = useState(null);
  const {
    isLoading,
    error,
    data: users,
    reload,
    run,
  } = useAsync({
    deferFn: getUsers,
  });

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>{`에러가 발생했습니다.${error}`}</div>;
  if (!users) return <button onClick={run}>불러오기</button>;

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
      <button onClick={reload} style={{ margin: "10px 0 0 10px" }}>
        다시불러오기
      </button>
      {userId && <User id={userId} />}
    </>
  );
};

export default Users;
