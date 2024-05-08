"use client";
import React from "react";
import Users from "./components/Users/page";
import { UsersProvider } from "./components/UsersContext/page";

const App = () => {
  return (
    <UsersProvider>
      <Users />
    </UsersProvider>
  );
};

export default App;
