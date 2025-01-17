import React from 'react';
import Header from "../components/Header";
import Coach from "../components/Coach";


const About = () => {
  return (
    <>
      <Header/>
     
      <main className='about max'>
      <section className='content spacer max padding'>
        <h1>ROLE MODEL ACADEMY</h1>
        <p>You were born for greatness. But achieving peak performance requires more than just talent. It demands unwavering discipline, unwavering focus, and the unwavering support of a community that understands your drive. The Role Model Academy is more than just a group; it's a crucible for high-achievers. Connect with fellow athletes, entrepreneurs, and visionaries who push you to be your best.</p>
        <img src="/assets/big-logo.png"></img>
        <button>JOIN THE ACADEMY</button>

      </section>
      <section className='mission-vision max padding'>
        <div className='mission'>
            <h2>MISSION</h2>
            <hr></hr>
            <p>At Role Model Academy, we aim to create a transformative space for personal growth, fostering leadership, resilience, and a supportive community.</p>

        </div>
        <div className='vision'>
            <h2>VISION</h2>
            <hr></hr>
            <p>Our mission is to empower individuals to unlock potential, build mental toughness, and lead with purpose in a supportive community.</p>
        </div>
      </section>
        <Coach/>
       
      </main>
    </>
  );
};

export default About;





