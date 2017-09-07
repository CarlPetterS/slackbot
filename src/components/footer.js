import React from 'react'

export const Footer = () => (
  <div className="footer">
    <ul className="footer__top">
      <li><a href="http://blog.getspeakup.com/" data-track="true" data-evtname="Blog clicked" data-evtdata="{&quot;social&quot;: true}" target="_blank" rel="noopener noreferrer" className="footer__items">Blog</a></li>
      <li><a href="http://www.facebook.com/GetSpeakUpDotCom" data-track="true" data-evtname="Facebook clicked" data-evtdata="{&quot;social&quot;: true}" target="_blank" rel="noopener noreferrer" className="footer__items">Facebook</a></li>
      <li><a data-evtname="Twitter clicked" data-track="true" data-evtdata="{&quot;social&quot;: true}" href="http://www.twitter.com/getspeakup" target="_blank" rel="noopener noreferrer" className="footer__items">Twitter</a></li>
      <li><a data-evtname="Linkedin clicked" data-track="true" data-evtdata="{&quot;social&quot;: true}" href="http://www.linkedin.com/company/3353141?trk=tyah&amp;trkInfo=tas%3ASpeakup%20-%20get" target="_blank" rel="noopener noreferrer" className="footer__items">LinkedIn</a></li>
      <li><a data-evtname="Google plus clicked" data-track="true" data-evtdata="{&quot;social&quot;: true}" href="http://plus.google.com/u/0/b/109964871415847003346/109964871415847003346" target="_blank" rel="noopener noreferrer" className="footer__items">Google+</a></li>
    </ul>
    <ul className="footer__bottom">
      <li><a href="https://getspeakup.com/faq"     className="footer__items items__bottom">FAQ</a></li>
      <li><a href="mailto:info@getspeakup.com"     className="footer__items items__bottom">Support</a></li>
      <li><a href="https://getspeakup.com/privacy" className="footer__items items__bottom">Privacy</a></li>
      <li><a href="https://getspeakup.com/terms"   className="footer__items items__bottom">Terms</a></li>
      <li className="footer__copyright">©getspeakup.com</li>
    </ul>
  </div>
)
