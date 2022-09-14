import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SIgn_img from './SIgn_img'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  


const Home = () => {

    const history = useNavigate();
     
 

const[name,setname]=useState("");
const[email,setemail]=useState("");
const[password,setpassword]=useState("");
const[number,setphone]=useState("");



const handleclick=()=>{
    var datas=JSON.parse(localStorage.getItem("datas") || "[]")
    var data={
        name:name,
        email:email,
        password:password,
        number:number
    }

    let status = true;

    datas.map((dta)=>{
        if(dta.email===email){
            alert("User Already Exist");
            status = false;
              
        }
        
    })

    
    



    status && datas.push(data)
    status && localStorage.setItem("datas",JSON.stringify(datas))
    status && history("/login");
}

const handleemail=(e)=>{
    setemail(e.target.value);

}




    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Register Here</h3>
                        <Form  >
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="text" name='name' value={name} onChange={(e)=>{setname(e.target.value)}}  placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' value={email} onChange={handleemail} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control onChange={(e)=>{setphone(e.target.value)}} name='number' value={number} type="phone" placeholder=" Phone No"/>
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' value={password} minLength={4} onChange={(e)=>{setpassword(e.target.value)}}placeholder="Password" />
                            </Form.Group>
                            <Button variant="secondary" className='col-lg-6' disabled={!name && !email && !password && !number}   type="submit" onClick={handleclick}>
                                Create
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
                    </div>
                    <SIgn_img />
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Home