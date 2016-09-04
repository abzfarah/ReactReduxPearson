import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Box from '../../components/Box'
import Button from '../../components/Button'
import Menu from '../../components/Menu'
import Paragraph from '../../components/Paragraph'



import classes from './CoreLayout.scss'
import CSSClassnames from '../../components/utils/CSSClassnames';
import  '../../styles/index.styl'
import '../../scss/index.scss';
const CLASS_ROOT = CSSClassnames.CALENDAR;


export const CoreLayout = ({ children }) => (
  <div >
    <Header />

      {children}

      <Footer size='small' appCentered={true} colorIndex='light-2'
        direction='column' primary={true} justify='between'
        pad={{horizontal: 'medium', vertical: 'medium', between: 'medium'}}>


  <footer class="site-footer">
  <div class="container">
    <div class="logo"><img src="https://cdn.auth0.com/styleguide/latest/lib/logos/img/badge.png" width="30"/></div>
    <div class="footer-grid">
      <div class="column">
        <div class="item">
          <h6>Product</h6>
        </div>
        <div class="item"><a href="https://auth0.com/pricing">Pricing</a></div>
        <div class="item"><a href="https://auth0.com/why-auth0">Why Auth0</a></div>
        <div class="item"><a href="https://auth0.com/how-it-works">How It Works</a></div>
      </div>
      <div class="column">
        <div class="item">
          <h6>Company</h6>
        </div>
        <div class="item"><a href="https://auth0.com/about">About Us</a></div>
        <div class="item"><a href="https://auth0.com/blog">Blog</a></div>
        <div class="item"><a href="https://auth0.com/jobs">Jobs</a></div>
        <div class="item"><a href="https://auth0.com/press">Press</a></div>
      </div>
      <div class="column">
        <div class="item">
          <h6>Security</h6>
        </div>
        <div class="item"><a href="https://auth0.com/availability-trust">Availability & Trust</a></div>
        <div class="item"><a href="https://auth0.com/security">Security</a></div>
        <div class="item"><a href="https://auth0.com/whitehat">White Hat</a></div>
      </div>
      <div class="column">
        <div class="item">
          <h6>Learn</h6>
        </div>
        <div class="item"><a href="https://support.auth0.com">Help & Support</a></div>
        <div class="item"><a href="https://auth0.com/docs">Documentation</a></div>
        <div class="item"><a href="https://auth0.com/opensource">Open Source</a></div>
      </div>
      <div class="column">
        <div class="item">
          <h6>Extend</h6>
        </div>
        <div class="item"><a href="https://auth0.com/lock">Lock</a></div>
        <div class="item"><a href="https://auth0.com/wordpress">WordPress</a></div>
        <div class="item"><a href="https://auth0.com/docs/apiv2">API Explorer</a></div>
      </div>
      <div class="contact">
        <div class="column">
          <div class="item">
            <h6>Contact</h6>
          </div>
          <div class="item item-text">10900 NE 8th Street<br/>Suite 700<br/>Bellevue, WA   98004</div>
        </div>
        <div class="column no-heading">
          <div class="item"><a href="tel:+18882352699">+1 (888) 235-2699</a><a href="tel:+14253126521">+1 (425) 312-6521</a></div>
          <div class="item item-phone-label">Support</div>
          <div class="item"><a href="tel:+14255599554">+1 (425) 559-9554</a></div>
        </div>
      </div>
    </div>
    <div class="colophon">
      <div class="column">
        <div class="social">
          <div class="twitter">
            <iframe allowtransparency="true" frameborder="0" scrolling="no" src="//platform.twitter.com/widgets/follow_button.html?screen_name=auth0" class="twitter"></iframe>
          </div>
          <div class="facebook">
            <iframe src="//www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Fgetauth0&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;show_count=false&amp;share=false&amp;height=21&amp;appId=507756515938786" scrolling="no" frameborder="0" allowtransparency="true" class="facebook"></iframe>
          </div>
        </div>
      </div>
      <div class="column">
        <ul class="list-inline text-right">
          <li><a href="https://auth0.com/privacy">Privacy Policy</a></li>
          <li><a href="https://auth0.com/terms">Terms of Service</a></li>
          <li><span>&copy; 2013-2016 Auth0&reg; Inc. All Rights Reserved.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

        
      </Footer>

  </div>
)


export default CoreLayout
