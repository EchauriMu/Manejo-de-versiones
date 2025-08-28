import React from 'react';
import { Layout, Typography, Space, Divider } from 'antd';

const { Footer: AntFooter } = Layout;
const { Text, Link } = Typography;

const Footer = () => {
  return (
    <AntFooter 
      className="footer-ant"
      style={{
        backgroundColor: '#EDE8E0',
        textAlign: 'center',
        padding: '40px 20px 30px 20px',
        borderTop: '1px solid #e0e0e0'
      }}
    >
      <Space 
        direction="vertical" 
        size="large" 
        style={{ width: '100%' }}
      >
        {/* Logo */}
        <div style={{ marginBottom: '20px' }}>
          <img 
            src="/public/logo.jpeg" 
            alt="Artwalk Residences Logo" 
            style={{ 
              maxHeight: '120px',
              width: 'auto'
            }}
          />
        </div>

        {/* Links Section */}
        <Space 
          split={<Divider type="vertical" style={{ borderColor: '#8c8c8c' }} />}
          style={{ 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          <Link 
            href="/privacy-policy"
            style={{ 
              color: '#8c8c8c',
              fontSize: '14px',
              fontWeight: '400'
            }}
          >
            Privacy Policy
          </Link>
          <Text 
            style={{ 
              color: '#8c8c8c',
              fontSize: '14px',
              fontWeight: '400'
            }}
          >
            ©Artwalk Residences
          </Text>
        </Space>

        {/* Powered by Section */}
        <div style={{ marginTop: '20px' }}>
          <Text 
            style={{ 
              color: '#8c8c8c',
              fontSize: '13px'
            }}
          >
            Powered by{' '}
            <Link 
              href="#" 
              style={{ 
                color: '#52c41a',
                textDecoration: 'none'
              }}
            >
              Mexlife Realtors
            </Link>
          </Text>
        </div>
      </Space>
    </AntFooter>
  );
};

export default Footer;