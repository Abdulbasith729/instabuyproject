import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetail({ cartItems, handleAddtoCart}) {
  const location = useLocation();
  const { title, price, images, description, category, id } = location.state;
  const [otherproducts, setOtherProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/categories/${category.id || 1}/products?limit=10&offset=0`
        );
        setOtherProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getData();
  }, [category.id]);

  const handleAddToCartClick = () => {
    if (typeof handleAddtoCart === 'function') {
      const newItem = {
        [id]: {
          title,
          price,
          quantity: id in cartItems ? cartItems[id].quantity + 1 : 1,
        },
      };
      handleAddtoCart(newItem);
      navigate('/Cart');
    } else {
      console.error('handleAddToCart is not a function');
    }
  };

  return (
    <div style={{ padding: 70 }}>
      <Row>
        <Col lg={2}>
          {images.map((image, index) => (
            <img key={index} src={image} width={150} style={{ marginBottom: 20, borderRadius: 8 }} />
          ))}
        </Col>
        <Col lg={5}>
          <div>
            <img src={images[0]} width={350} style={{ marginBottom: 20, borderRadius: 8 }} />
            <h4>{title.split(' ')[0]}</h4>
            <div style={{ color: '#216ad9' }}>${price}</div>
          </div>
          <div style={{ marginBottom: 20 }}>{description}</div>
          <Button onClick={handleAddToCartClick}>Add to cart</Button>
        </Col>
        <Col lg={5}>
          <h3>Other Products in the same category</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {otherproducts.map((product) => (
              <Card key={product.id} style={{ width: '10rem', border: 'none', margin: 10 }}>
                <Card.Img variant="top" src={product.images[0]} alt={product.title} />
                <Card.Body>
                  <Card.Title>{product.title.split(' ')[0]}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  <Button
                    style={{ width: 120 }}
                    onClick={() => navigate(`/products/${product.id}`, { state: product })}
                  >
                    View Cart
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}
