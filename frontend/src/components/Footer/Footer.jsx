import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {

  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, porro facere ipsam error nemo rerum accusantium commodi totam incidunt delectus, accusamus assumenda. Qui et dignissimos accusamus error illo autem asperiores.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-centre">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-7620574763</li>
                <li>jatinmahakal12@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 Jatin Mahakal - All Right Reserved
      </p>
    </div>
  )
}

export default Footer
