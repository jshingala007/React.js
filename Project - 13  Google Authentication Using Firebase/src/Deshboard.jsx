import { signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Style.css'
import { auth } from '../FIrebase';


const Deshboard = () => {

    const navigate = useNavigate();

    const logout = async () => {
        try{
            await signOut(auth)
            alert("Logout SuccessFully...👍")
            navigate('/')

        }catch(err){
            console.log(err);
            return false;
        }
    }
  return (
    <div align="center">
        <h2>DASHBOARD</h2>
        <button onClick={() => logout() }>LogOut</button>
      
    </div>
  )
}

export default Deshboard
