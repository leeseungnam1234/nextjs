import axios from "axios";
import React from "react";
import { useAsync } from "react-async";

async function getUser(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}

const User = ({ id }) => {
  const {
    data: user,
    error,
    isLoading,
  } = useAsync({
    promiseFn: () => getUser(id), // Pass a function reference
    watch: id,
  });

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>`에러가 발생했습니다.${error}`</div>;
  if (!user) return null;
  return (
    <div>
      <h2>{user.username}</h2>
      <p>Email:</p>
      <b>{user.email}</b>
    </div>
  );
};

export default User;
