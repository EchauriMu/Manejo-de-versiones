import React from 'react';
import { Row, Col, Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;

const LocationSection = () => (
  <>
    <Divider style={{ margin: '40px 0 30px' }} />
    <Row gutter={[24, 24]} style={{ marginBottom: '40px' }}>
      <Col xs={24} md={12}>
        <Title level={2}>Location</Title>
        <Paragraph>
          <Text strong>ArtWalk</Text> is located in the heart of Tulum, just steps from the main avenue and close to restaurants, shops, and cultural attractions.
          Enjoy the perfect balance between urban life and natural surroundings.
        </Paragraph>
        <Paragraph>
          <Text underline>Address:</Text> Av. Kukulkan, Tulum, Quintana Roo, México.
        </Paragraph>
      </Col>
      <Col xs={24} md={12}>
        <div style={{ width: '100%', height: 320, borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}>
          <iframe
            title="ArtWalk Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.947366869463!2d-87.46312368460136!3d20.21112398642645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4fd8e8e8e8e8e8%3A0x1234567890abcdef!2sTulum%2C%20Quintana%20Roo%2C%20Mexico!5e0!3m2!1sen!2smx!4v1680000000000!5m2!1sen!2smx"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Col>
    </Row>
  </>
);

export default LocationSection;