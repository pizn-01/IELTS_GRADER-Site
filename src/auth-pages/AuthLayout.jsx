import React from 'react';
import { Link } from 'react-router-dom';

const AuthLayout = ({ children, noBox }) => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#FFFFFF',
      fontFamily: '"Plus Jakarta Sans", sans-serif'
    }}>
      {/* Global styles for fine-tuning */}
      <style dangerouslySetInnerHTML={{ __html: `
        input::placeholder {
          color: #9CA3AF !important;
          opacity: 1;
        }
        input:focus {
          border: 1.5px solid #3B82F6 !important;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.1) !important;
        }
        .btn-primary-active:hover {
          background-color: #374555 !important;
        }
        .btn-google:hover {
          background-color: #F9FAFB !important;
        }
        a:hover {
          opacity: 0.8;
        }
      ` }} />

      {/* Navbar */}
      <nav style={{
        height: '56px',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E7EB',
        padding: '0 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <Link to="/" style={{
          fontSize: '16px',
          fontWeight: 700,
          color: '#1a1f36',
          textTransform: 'uppercase',
          letterSpacing: '-0.02em',
          textDecoration: 'none'
        }}>
          IELTSGRADER
        </Link>
        <a href="#" style={{
          fontSize: '14px',
          fontWeight: 400,
          color: '#374151',
          textDecoration: 'none'
        }}>
          Need Help?
        </a>
      </nav>

      {/* Main Content */}
      <main style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: noBox ? 'flex-start' : 'center',
        padding: noBox ? '80px 20px 60px' : '60px 20px',
        backgroundColor: '#FFFFFF'
      }}>
        <div style={{
          width: '100%',
          maxWidth: noBox ? '520px' : '480px',
          backgroundColor: '#FFFFFF',
          padding: noBox ? '0' : '48px',
          borderRadius: noBox ? '0' : '20px',
          boxShadow: noBox ? 'none' : '0 4px 20px rgba(0, 0, 0, 0.03), 0 10px 40px rgba(0, 0, 0, 0.04)',
          border: noBox ? 'none' : '1px solid #E5E7EB'
        }}>
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        padding: '20px',
        textAlign: 'center',
        fontSize: '13px',
        color: '#9CA3AF'
      }}>
        Copyright @IELTSGRADER 2025 | <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Privacy Policy</a>
      </footer>
    </div>
  );
};

export default AuthLayout;
