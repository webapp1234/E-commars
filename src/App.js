import { Route, Routes } from "react-router-dom";
import AdminNav from "./components/admin/header/AdminNav";
import UserNav from "./components/user/header/UserNav";
import Dashboard from "./components/admin/pages/Dashboard";
import Manage from "./components/admin/pages/Manage";

function App() {
  let role = "admin";

  if (role == "user") {
    return <UserNav />;
  } else {
    return (
      <>
        <AdminNav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/manage" element={<Manage />} />
        </Routes>
      </>
    );
  }
}

export default App;
