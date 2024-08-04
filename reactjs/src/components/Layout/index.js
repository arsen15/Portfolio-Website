import "./index.scss";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>
        {children}
      </div>
    </div>
  );
};

export default Layout;
