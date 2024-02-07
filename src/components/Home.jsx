import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import CarusalOne from '../assets/Carusal-1.png';
import Carusaltwo from '../assets/Carusal-2.png';
import Carusalthree from '../assets/Carusal-3.png';
import Companyone from '../assets/Company-1.png';
import Companytwo from '../assets/Company-2.png';
import CompanyThree from '../assets/Company-3.png';
import Companyfour from '../assets/Company-4.png';
import CompanyFive from '../assets/Company-5.png';
import CompanySix from '../assets/Company-6.png';

export default function Home({ user }) {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    if (user) {
      navigate('/Products');
    } else {
      navigate('/login');
    }
  };

  return (
    <div>
      <Carousel>
        {[{ image: CarusalOne }, { image: Carusaltwo }, { image: Carusalthree }].map((item, index) => (
          <Carousel.Item key={index}>
            <Row>
              <Col>
                <div style={{ padding: 80 }}>
                  <h1 style={{ fontWeight: 700 }}>Shop with UTMOST</h1>
                  <h1 style={{ color: "#216ad9", fontWeight: 800 }}><i>Style</i></h1>
                  <h3 style={{ marginBottom: 20 }}>Shop with the latest</h3>
                  <div style={{ marginBottom: 20 }}>
                    <Button onClick={handleCTAClick} style={{ width: "150px" }}>Browse Product</Button>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <h3 style={{ marginBottom: 20 }}>
                      Products available from :
                    </h3>
                    <img src={Companyone} style={{ height: 50 }} alt="Company Logo" />
                    <img src={Companytwo} style={{ height: 50 }} alt="Company Logo" />
                    <img src={CompanyThree} style={{ height: 50 }} alt="Company Logo" />
                    <img src={Companyfour} style={{ height: 50 }} alt="Company Logo" />
                    <img src={CompanyFive} style={{ height: 50 }} alt="Company Logo" />
                    <img src={CompanySix} style={{ height: 50 }} alt="Company Logo" />
                  </div>
                </div>
              </Col>
              <Col>
                <img src={item.image} alt={`Carousel Image ${index + 1}`} style={{ height: "90vh", objectFit: "contain", width: "100%" }} />
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
