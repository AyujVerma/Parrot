import React from 'react';
import './footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__column">
        <h4>About Us</h4>
        <ul className='footer_text'>
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Our Team</a></li>
          <li><a href="#">Testimonials</a></li>
        </ul>
      </div>
      <div className="footer__column">
        <h4>Contact Us</h4>
        <ul  className='footer_text'>
          <li><a href="#">Phone</a></li>
          <li><a href="#">Email</a></li>
          <li><a href="#">Address</a></li>
        </ul>
      </div>
      <div className="footer__column">
        <h4>Services</h4>
        <ul  className='footer_text'>
          <li><a href="#">Reading</a></li>
          <li><a href="#">Writing</a></li>
          <li><a href="#">Analyze</a></li>
        </ul>
      </div>
      <div className="footer__column">
        <h4>Other</h4>
        <ul  className='footer_text'>
          <li><a href="#">Blog</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="footer__column">
        <h4>Social Media</h4>
        <ul  className='footer_text'>
          <li><a href="#"><InstagramIcon /></a></li>
          <li><a href="#">< TwitterIcon/></a></li>
          <li><a href="#">< FacebookIcon/></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
