import React, { useContext } from "react";
import Table from "./Table";
import Usercontext from "../context/Usercontext";

const Section = () => {
  let { user, setuser } = useContext(Usercontext);
  return (
    <div>
      {user} from Section
      <button onClick={() => setuser("hello garvit")}>click me</button>
      <Table />
    </div>
  );
};

export default Section;
