import React from 'react';

const Footer = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', height: '70px' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center' }}>
        <li>
          <a href='#'>Tesla © 2022</a>
        </li>
        <li>
          <a href='#'>Privacy & Legal</a>
        </li>
        <li>
          <a href='#'>Vehicle Recalls</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
        <li>
          <a href='#'>Careers</a>
        </li>
        <li>
          <a href='#'>News</a>
        </li>
        <li>
          <a href='#'>Engage</a>
        </li>
        <li>
          <a href='#'>Locations</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
