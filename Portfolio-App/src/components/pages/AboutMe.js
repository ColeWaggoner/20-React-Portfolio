import React from 'react';

import picture from '../../assets/lines.jpg';

import me from '../../assets/me.jpg';



const About = () => {
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
      <div style={overlayStyle}></div>
      <div style={containerStyle}>
      <div style={textContainerStyle}>
        <h1 style={headerStyle}>About Me</h1>
        <p style={paragraphStyle}>
          I am a statistics senior at USF with a minor in mathematics. I recently graduated from UCF's coding boot camp for full stack web development. I like sports, video games, and dogs.        </p>
      </div>
      <div style={imageContainerStyle}>
        <div src= '../../assets/me.jpg'>
          </div>
      </div>
      
    </div>
    </section>
  );
}

export default About;