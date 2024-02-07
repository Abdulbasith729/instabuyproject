import React from 'react'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Buy from '../assets/Buy.png';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



export default function Signup({setuser}) {

    const [email,setemail]=useState('');
    const navigate = useNavigate();

  return (
    <div style={{backgroundColor:"#216ad9"}}>
    <Row style={{padding:75}}>
    <Col style={{padding : 100}}> 
   <div>
     <h1 style={{color: 'white'}}>InstaBug!</h1>
     <h3 style={{color : 'white'}}>One place you all need</h3>

   <Form>
     <div style={{display :'grid', gridTemplateColumns :'repeat(2,1fr)' ,width:'80%'}}>
     <Form.Group  style={{width : '90%'}}   className="mb-3" controlId="formBasicEmail">
       <Form.Label>Email address</Form.Label>
       <Form.Control type="email"  onChange={(e)=> setemail(e.currentTarget.value)}  placeholder="Enter email" />
     </Form.Group>

     <Form.Group style={{width : '90%'}}     className="mb-3" controlId="formBasicPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" placeholder="Password" />
     </Form.Group>

     <Form.Group style={{width : '90%'}}     className="mb-3" controlId="formBasicPassword">
       <Form.Label> Re-enter Password</Form.Label>
       <Form.Control type="password" placeholder=" Re-Enter Password" />
     </Form.Group>


     </div>
     <Button 
 style={{
   width: '70%',
   marginBottom: 26,
   backgroundColor: '#216ad9',
   borderWidth: 1,
   borderColor: 'white',
   color: 'white'
 }}
 onClick={() => {
   localStorage.setItem('userEmail', email);
   setuser(email)
   navigate('./')
 }}
>
Sign up
</Button>
   <div style={{color :'white'}}  >
     go to <a style={{color :'white'}} onClick={()=>navigate('/login')}>Login </a>
   </div>
   </Form>
   </div>
   


    </Col> 
    <Col>
     <img src={Buy}  style={{height : "80vh"}}/>
    
    
    </Col>

    </Row>
    
   </div>
  )
}
