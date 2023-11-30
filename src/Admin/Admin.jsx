import React from "react";
import Adminlogin from "./Adminlogin";
import { Link } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AdminProduct from "./Adminproduct/AdminProduct";
import User from "./AdminUser/User";
import HomeAdmin from "./AdminHome/HomeAdmin";
import './Admin.css'
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const Admin = ({ isadminlog, setIsAdminLog }) => {
  return (
    <div>
      {isadminlog ? (
        <div>
          <MdOutlineAdminPanelSettings style={{ marginTop:"30px", color: "#Ee222a",fontSize:"60px" }} />
          
          
          <br />
          <br />
          {/* <Link
            to={"/admin/allproduct"}
            className="text-decoration-none text-dark"
          >
            <h1>Products</h1>
          </Link>
          <Link to={"/admin/user"} className="text-decoration-none text-dark">
            <h1>Users</h1>
          </Link> */}
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="User" >
            <User/>
            </Tab>
            <Tab eventKey="product" title="Products">
              <AdminProduct/>
            </Tab>
            
          </Tabs>
        </div>
      ) : (
        <Adminlogin setIsAdminLog={setIsAdminLog} isadminlog={isadminlog} />
      )}
    </div>
  );
};

export default Admin;
