import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="intro">
        <h1>Hello, I'm Harish Kumar</h1>
        <p>Full Stack Developer | MERN Stack | Open to work</p>
        <Link to="/about" className="btn">Learn More About Me</Link>
      </div>
    </div>
  );
}

export default Home;
