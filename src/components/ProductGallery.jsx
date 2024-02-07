import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function ProductGallery() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=20');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching products');
        setLoading(false);
        console.error('Error fetching products:', error);
      }
    }

    getProduct();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: 50 }}>
      <h3>Select new products</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <Card key={product.id} style={{ width: '18rem', border: 'none', margin: 10 }}>
            <Card.Img variant="top" src={product.images[0]} alt={product.title} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
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
    </div>
  );
}
