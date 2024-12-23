import React, { useEffect } from "react"; 
import Login from "./Login"; 
import Signup from "./Signup"; 
import { useSelector } from 'react-redux'; 
import { useNavigate } from 'react-router-dom'; 
import withLoader from "../Home/Loader/withLoader";
import "./Auth.css";
function Auth() {
  const haveaccount = useSelector((state) => state.haveaccount.haveaccount); 
  const navigate = useNavigate();
  const homeselector = document.querySelector("body"); 
  homeselector.style.cssText = "display: flex;";
  useEffect(() => {  
    const loggedIn = localStorage.getItem('logged_in'); 
    if (loggedIn === 'true') 
      { 
        navigate('/home');
      } }, 
      [navigate]);
  return (
    <div className="authform">
      <div className="form_div">{haveaccount ? <Signup /> : <Login />}</div>
    </div>
  );
}

export default withLoader(Auth);
