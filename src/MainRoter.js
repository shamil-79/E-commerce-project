import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

import { useState } from "react";
import { items } from "./components/productes/Products";
import SIngleProduct from "./pages/SIngleProduct";
import Payment from "./pages/Payment";

import NavBar3 from "./components/Navbar/NavBar3";

import { createContext } from "react";

import SrchEngine from "./pages/SrchEngine";
import Footer from "./components/Footer/Footer";
import {
  validateCpassword,
  validateEmail,
  validateMnumber,
  validateName,
  validatePassword,
} from "./Validateuser";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./Admin/Admin";
import Adminlogin from "./Admin/Adminlogin";
import AdminProduct from "./Admin/Adminproduct/AdminProduct";
import User from "./Admin/AdminUser/User";
import Singleproduct from "./Admin/Adminproduct/Singleproduct";
import SingleUser from "./Admin/AdminUser/SingleUser";
import AddProduct from "./Admin/Adminproduct/AddProduct";
import UpdateProduct from "./Admin/Adminproduct/UpdateProduct";
export const Mycart = createContext();

const MainRoter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [valUser, setvalUser] = useState([]);
  const validateUser = (name, email, mnumber, password, cpassword) => {
    const findUser = valUser.find(
      (x) => x.email === email && x.mnumber === mnumber
    );
    if (!findUser) {
      if (
        validateName(name) &&
        validateEmail(email) &&
        validateMnumber(mnumber) &&
        validatePassword(password) &&
        validateCpassword(cpassword, password)
      ) {
        setvalUser([
          ...valUser,
          { name: name, email: email, mnumber: mnumber, password: password },
        ]);
        nav("/login");
      }
    } else {
      alert("Invalid registration !!!!");
    }
  };

  const [loguser, setloguser] = useState({});
  const Loguser = (email, password) => {
    const findUser = valUser.find(
      (x) => x.email === email && x.password === password
    );
    if (findUser && validateEmail(email) && validatePassword(password)) {
      setloguser({ email: email, password: password, name: findUser.name });
      setCart(findUser.cart || []);
      setIsLoggedIn(true);
      nav("/");
    } else {
      if (!validateEmail(email)) {
        alert("Email is not valid");
        return;
      }

      if (!validatePassword(password)) {
        alert("Password should be at least 6 characters");
        return;
      }

      alert("Email or Password is incorrect !!!!");
    }
  };
  console.log(loguser);
  const [item, setItem] = useState(items);
  const nav = useNavigate();
  const [newitem, setNewitem] = useState();
  const viewitem = (items) => {
    const newitem = item.filter((item) => item.id === items);
    setNewitem(newitem);
    nav("/singleitem");
  };

  // const handelqty=(id)=>{
  //   const newqty=newitem.map((item)=>item.id===id ? {...item, qty: item.qty+1}:item)
  //   setNewitem(newqty)
  // }
  // const handelqty2=(id)=>{
  //   const newqty=newitem.map((item)=>item.id===id && item.qty>1 ? {...item, qty: item.qty-1}:item)
  //   setNewitem(newqty)
  // }
  const [cart, setCart] = useState([]);
  const addtoCart = (id) => {
    if (isLoggedIn) {
      const findItem = item.find((item) => item.id === id);
      if (findItem) {
        const Data = cart.some((item) => item.id === id);
        alert("item in cart")
        if (Data) {
          const UpDateCart = cart.map((item) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
           
          );
          
          setCart(UpDateCart);
          
        } else {
          setCart([...cart, { ...findItem, qty: findItem.qty }]);
          
        }
      }
    } else {
      alert("Please Singup or Login");
      nav("/login");
    }
  };
  
  const [search, setSearch] = useState();
  const [result, setResult] = useState();
  const handlechange = (e) => {
    setSearch(e.target.value);
  };
  const handelSearch = () => {
    const findsearch = item.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setResult(findsearch);
    nav("/srch");
  };
  const handleLogout = () => {
    const findUser = valUser.map((user) =>
      user.email === loguser.email ? { ...user, cart: cart } : user
    );
    setvalUser(findUser);
    setCart([]);
    setloguser({});
    setIsLoggedIn(false);
  };
  const[orderdetails,setOrderDetails]=useState()

  const [isadminlog,setIsAdminLog]=useState(false)
  const navigate = useNavigate();
  const [adminnewitem, setAdminNewitem] = useState();
  const Adminviewitem = (items) => {
    const adminnewitem = item.filter((item) => item.id === items);
    setAdminNewitem(adminnewitem);
    navigate("/admin/singelproduct");
  };
  


  return (
    <div>
      <Mycart.Provider value={{ cart, setCart,item,adminnewitem,Adminviewitem,setItem,orderdetails,setOrderDetails,valUser, setvalUser,loguser, setloguser }}>
        <NavBar3
          item={item}
          handlechange={handlechange}
          handelSearch={handelSearch}
          loguser={loguser}
          handleLogout={handleLogout}
          isLoggedIn={isLoggedIn}
        />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/shop"
            element={<Shop item={item} viewitem={viewitem} />}
          ></Route>
          <Route
            path="/singleitem"
            element={<SIngleProduct newitem={newitem} addtoCart={addtoCart} />}
          ></Route>
          <Route path="/contact" element={<Contact cart={cart} />}></Route>
          <Route path="/cart" element={<Cart cart={cart} />}></Route>
          <Route
            path="/register"
            element={<Register validateUser={validateUser} />}
          ></Route>
          <Route path="/login" element={<Login Loguser={Loguser} />}></Route>
          {/* <Route
          path="/register"
          element={
            <Registartion
              handleChange={handleChange}
              setFormData={setFormData}
              formData={formData}
              errors={errors}
              setErrors={setErrors}
            />
          }
        ></Route> */}

          <Route path="/pay" element={<Payment />}></Route>
          <Route
            path="/srch"
            element={<SrchEngine result={result} viewitem={viewitem} />}
          ></Route>
        <Route path="/logadmin" element={<Adminlogin setIsAdminLog={setIsAdminLog} isadminlog={isadminlog}/>}></Route>
          <Route path="/admin" element={<Admin setIsAdminLog={setIsAdminLog} isadminlog={isadminlog}/>}></Route>
          <Route path="/admin/allproduct" element={<AdminProduct item={item}/>} ></Route>
          <Route path="/admin/singelproduct" element={<Singleproduct/>}></Route>
          <Route path="/admin/addproduct" element={<AddProduct/>}></Route>
          <Route path="/admin/edit/:id" element={<UpdateProduct/>}></Route>
          <Route path="/admin/user" element={<User/>}></Route>
          <Route path="/admin/user/:id" element={<SingleUser/>}></Route> 
        </Routes>
        <Footer />
      </Mycart.Provider>
    </div>
  );
};

export default MainRoter;
