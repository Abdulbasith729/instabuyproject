import React from 'react'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import MegaSale from '../assets/MegaSale.png';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function Login({setUser}) {
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
     <div style={{display :'flex',justifyContent : 'space-between ',width:'70%'}}>
     <Form.Group  style={{width : '49%'}}   className="mb-3" controlId="formBasicEmail">
       <Form.Label>Email address</Form.Label>
       <Form.Control type="email"  onChange={(e)=> setemail(e.currentTarget.value)}           placeholder="Enter email" />
     </Form.Group>

     <Form.Group style={{width : '49%'}}     className="mb-3" controlId="formBasicPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" placeholder="Password" />
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
   setUser(email)
   navigate('/products')
 }}
 
>
start shopping
</Button>
    
   <div style={{color :'white'}}  >
     Join the club <a style={{color :'white'}} onClick={()=>navigate('/Signup')}>click here? </a>
   </div>
   </Form>
   </div>
   


    </Col> 
    <Col>
     <img src={MegaSale}  style={{height : "80vh"}}/>
    
    
    </Col>

    </Row>
    
   </div>
  )
}
