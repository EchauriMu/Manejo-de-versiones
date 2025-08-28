import React from 'react';
import { Card, Typography, Space } from 'antd';

const { Text } = Typography;

const ContactoInfo = ({ preciosData }) => (
  <Card 
    title="INFORMACIÓN Y CONTACTO" 
    style={{ height: '450px' }}
    bodyStyle={{ padding: '20px' }}
  >
    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
      {preciosData.map((item, index) => (
        <Card 
          key={index}
          size="small"
          style={{ 
            backgroundColor: index % 2 === 0 ? '#f0f2f5' : '#ffffff',
            border: '1px solid #d9d9d9'
          }}
        >
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Text>{item.servicio}</Text>
            <Text strong style={{ color: '#1890ff' }}>
              {item.precio}
            </Text>
          </div>
        </Card>
      ))}
    </Space>
    <div style={{ 
      textAlign: 'center', 
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f6ffed',
      borderRadius: '8px',
      border: '1px solid #b7eb8f'
    }}>
      <Space direction="vertical" size="small">
        <img 
          src="https://via.placeholder.com/120x80/52C41A/FFFFFF?text=ARTWALK"
          alt="ArtWalk"
          style={{ borderRadius: '4px' }}
        />
        <Text strong style={{ color: '#52C41A' }}>
          📞 +52 322 127 8531
        </Text>
        <Text style={{ fontSize: '12px' }}>
          FLOOR PLANS DISPONIBLES
        </Text>
      </Space>
    </div>
  </Card>
);

export default ContactoInfo;
