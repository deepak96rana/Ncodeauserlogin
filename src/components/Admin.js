import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';

function Admin() {
    

    const[data,setdata]=useState([]);


    useEffect(()=>{
   getData();
     
},[])


const getData = ()=>{

    let  item =localStorage.getItem("datas")
    item=  JSON.parse(item)
    console.log(item)
    if(item === null){
        console.log("a");
        setdata([]);
    }else{
        console.log("b");
        setdata(item);
    }
   

}
const history = useNavigate();
  return (
    <>
       <h1>Welcome To Admin Page</h1>

     

       

    

    <Table striped bordered hover>
        
        <thead>
        
          <tr>
          <th> Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Phone No</th>
          </tr>
      </thead>
      <tbody>

       
      
        
      { data.length>0 ? 
        
             (data.map((tab)=>{
                return(


<tr>
   <td>{tab.name}</td> 
<td>{tab.email}</td>
<td>{tab.password}</td>
<td>{tab.number}</td>
</tr>


                )
             }))  
         : <tr><td>No Records Found</td></tr>
    }
        
        </tbody>
       
    </Table>
            


   



<div>

        <button variant="secondary" className='col-lg-6' style={{width:100,marginLeft:"50%"}}onClick={()=>{
            history("/login");
        }}>Logout</button>
    </div>
    </>

  )
    
}


export default Admin