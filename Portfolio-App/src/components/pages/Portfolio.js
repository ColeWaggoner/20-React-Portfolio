import React from 'react';
import picture from '../../assets/lines.jpg';
import Project from '../Project';

export default function Port() {
  const sectionStyle = {
    backgroundImage: `url(${picture})`,
    backgroundSize: 'cover',
    position: 'relative',
    height: '1000px',
    backgroundColor: 'rgba(4,32,84,1)'
  };

  const overlayStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    // backgroundColor: 'rgba(4,32,84,1)',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const imageContainerStyle = {
    flex: '1',
    textAlign: 'center',
  };

  const textContainerStyle = {
    flex: '1',
    textAlign: 'center',
    padding: '0 20px',
    color: 'white',
  };

  const headerStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '18px',
  };
  return (
    <section style={sectionStyle}>
        
      <Project />
      
      
    </section>
  );
}
