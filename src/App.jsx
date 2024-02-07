import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Logo from './assets/logo.png';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ProductDetail from './components/ProductDetail';
import ProductGallery from './components/ProductGallery';
import Cart from './components/Cart';
import Check from './components/Check';

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const Useremail = localStorage.getItem('user');
    if (Useremail) {
      setUser(Useremail);
    }
  }, []);

  const handleAddToCart = (item) => {
    setCartItems({ ...cartItems, ...item });
  };

  return (
    <div>
      <Navbar id="MyNav">
        <Navbar.Brand onClick={() => navigate('/')}>
          <img src={Logo} height="30" width="30" alt="Logo" />
          Instabuy
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {user && (
            <Button onClick={() => navigate('/Cart')}>
              Cart{' '}
              {Object.keys(cartItems).length > 0 && <Badge bg="success"></Badge>}
            </Button>
          )}
          &nbsp; &nbsp; &nbsp;
          <Button style={{ width: '100px' }} onClick={() => navigate(user ? '/logout' : '/login')}>
            {user ? 'Logout' : 'Login'}
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/products" element={<ProductGallery />} />
        <Route path="/products/:id" element={<ProductDetail cartItems={cartItems} handleAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/check" element={<Check />} />
      </Routes>
    </div>
  );
}

export default App;
