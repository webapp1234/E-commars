import { Route, Routes } from "react-router-dom";
import AdminNav from "./components/admin/header/AdminNav";
import UserNav from "./components/user/header/UserNav";
import Dashboard from "./components/admin/pages/Dashboard";
import Manage from "./components/admin/pages/Manage";
import Main from "./components/Main";
import Usercontext from "./context/Usercontext";
import { useState } from "react";

function App() {
  const [user, setuser] = useState("false");

  let role = "admin";

  if (role == "user") {
    return <UserNav />;
  } else {
    return (
      <>
        {/* <AdminNav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/manage" element={<Manage />} />
        </Routes> */}

        <Usercontext.Provider value={{ user, setuser }}>
          <Main />
        </Usercontext.Provider>
      </>
    );
  }
}

export default App;
