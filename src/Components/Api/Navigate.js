import React from "react";
import { useHistory } from "react-router-dom";

const Navigate = () => {
  const history = useHistory();
  return history.push("http://localhost:3000/");
};

export default Navigate;
