import React, { useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const Details = () => {
   

    const [logindata, setLoginData] = useState([]);


    const history = useNavigate();

    
  

   

    const handlelogin = () => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
         
            setLoginData(user);


            

           
        }
    }

    const userlogout = ()=>{
        localStorage.removeItem("user_login")
        history("/");
    }

    useEffect(() => {
        handlelogin();
    }, [])

    return (
        <>
            {
                logindata.length === 0 ? "errror" :
                    <>
                        <h1 style={{marginLeft:550}}>Welcome To NCODEA</h1>
                        <h1 style={{marginLeft:670}}>{logindata[0].name}</h1>
                        <Button style={{marginLeft:700}} onClick={userlogout}>LogOut</Button>

              
                     
                    </>
            }
        </>
    )
}

export default Details




