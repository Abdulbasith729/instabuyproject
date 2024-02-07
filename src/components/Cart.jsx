import React, { useEffect, useState } from 'react';
import CartImg from '../assets/6.png';
import Table from 'react-bootstrap/Table';
import { Row, Col, Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Cart({ cartItems }) {
  console.log(cartItems);

  const [totalprice, setTotalprice] = useState(0);
  const [totalquantity, setTotalQuantity] = useState(0);
  const navigate =useNavigate();


  useEffect(() => {
    let tempPrice = 0;
    let tempQuantity = 0;

    Object.keys(cartItems).forEach((cartIdItem) => {
      const details = cartItems[cartIdItem];
      tempQuantity += details.quantity;
      tempPrice += details.quantity * details.price;
    });

    setTotalQuantity(tempQuantity);
    setTotalprice(tempPrice);
  }, [cartItems]); // Corrected dependency array

  return (
    <div style={{ margin: 60 }}>
      <Row>
        <Col style={{ marginTop: 40 }}>
          <h3>Your cart :</h3>
          <div>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th> {/* Corrected typo */}
                </tr>
              </thead>
              <tbody>
                {Object.keys(cartItems).map((cartIdItem) => {
                  const itemDetails = cartItems[cartIdItem];
                  return (
                    <tr key={cartIdItem}>
                      <td>{itemDetails.title}</td>
                      <td>{itemDetails.quantity}</td>
                      <td>{itemDetails.quantity * itemDetails.price}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td>Total</td>
                  <td>{totalquantity}</td>
                  <td>{totalprice}</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <Button onClick={()=> navigate('/check')}>Checkout</Button>
        </Col>
        <Col>
          <img src={CartImg} alt="Cart" height={500} />
        </Col>
      </Row>
    </div>
  );
}
