import React, { useEffect } from "react";
import { useUsersDispatch, useUsersState } from "../UsersContext/page";

const User = ({ id }) => {
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);

  const { Loading, data: user, error } = state.user;

  if (Loading) return <div>로딩중...</div>;
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
