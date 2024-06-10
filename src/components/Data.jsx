import React, { useContext } from "react";
import Usercontext from "../context/Usercontext";

const Data = () => {
  let { user, setuser } = useContext(Usercontext);

  return (
    <div>
      {user} from data.jsx
      <button onClick={() => setuser("true")}>change</button>
    </div>
  );
};

export default Data;
