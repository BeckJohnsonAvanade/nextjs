import styles from './footer.module.scss'

export default function Footer() {
    return (
        <footer role="contentinfo" className={styles.footer}>
           <div className={styles.row}>
       
            <div>
              LOGO

                <address>The University of Chicago Medicine
                    5841 S. Maryland Avenue
                Chicago, IL 60637 | <a href="tel:773-702-1000" className="gtmCall">773-702-1000</a></address>

            <a className="tel gtmCall" href="tel:18888240200"><span>Appointments:</span> 1-888-824-0200</a>
            </div>
              
            <ul>
                <li><a href="/conditions-services">Conditions &amp; Services</a></li>
                <li><a href="/patients-visitors">Patients &amp; Visitors</a></li>
                <li><a href="/health-care-professionals" >Healthcare Professionals</a></li>
                <li><a href="/research" >Research</a></li>
                <li><a href="/comer" >Comer Children's Hospital</a></li>
                <li><a href="/about-us/community" >Community Engagement</a></li>
                <li><a href="/international" >International Programs</a></li>
            </ul>
                   
                   
            <ul>
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/forefront" >News</a></li>
                <li><a href="/about-us/media-newsroom" >Media</a></li>
                <li><a href="/about-us/careers" >Careers</a></li>
                <li><a href="/patients-visitors/classes-events">Events</a></li>
                <li><a href="/contact-us-form" >Contact Us</a></li>
                <li><a href="/about-us/jcaho-public-notice" >JCAHO Public Notice</a></li>
            </ul>
                   
                   
            <ul>
                <li><a href="http://biologicalsciences.uchicago.edu/" >Biological Sciences Division</a></li>
                <li><a href="/about-us/overview-and-facts-at-a-glance/pritzker-school-of-medicine" >Pritzker School of Medicine</a></li>
                <li><a href="https://www.uchicago.edu/" >University of Chicago</a></li>
            </ul>
                  

            <ul>
                <li><a href="/about-us/privacy-practices">Privacy Practices</a></li>
                <li><a href="/about-us/privacy-practices/legal-disclaimer">Legal Disclaimer</a></li>
                <li><a href="/health-care-professionals/employee-login">Employee Login</a></li>
                <li><a href="https://identity.uchospitals.edu/pss/index.htm">Employee Password Reset</a></li>
                <li><a href="/website-privacy-policy">Website Privacy Policy</a></li>
                <li><a href="/website-terms-of-service">Website Terms of Use</a></li>
            </ul>

           </div>

           <div className={styles.row}>
            <ul className={styles.social}>
            <li><a href="https://www.facebook.com/UChicagoMed/" target="_blank" data-gtm-vis-recent-on-screen-7199061_373="3643" data-gtm-vis-first-on-screen-7199061_373="3643" data-gtm-vis-total-visible-time-7199061_373="100" data-gtm-vis-has-fired-7199061_373="1">
                <span className="icon-facebook-f-brands"></span><span className="sr-only">facebook</span></a></li>
            <li><a href="https://twitter.com/UChicagoMed" target="_blank" data-gtm-vis-has-fired-7199061_373="1">
                <span className="icon-twitter-brands"></span><span className="sr-only">twitter</span></a></li>
            <li><a href="https://www.linkedin.com/company/university-of-chicago-medicine/" target="_blank" data-gtm-vis-has-fired-7199061_373="1"><span className="icon-linkedin-in-brands"></span><span className="sr-only">linkedin</span></a></li>
            <li><a href="https://www.instagram.com/uchicagomed/" target="_blank" data-gtm-vis-has-fired-7199061_373="1"><span className="icon-instagram-brands"></span><span className="sr-only">instagram</span></a></li>
            <li><a href="https://www.youtube.com/uchicagomedicine" target="_blank" data-gtm-vis-has-fired-7199061_373="1"><span className="icon-youtube-brands"></span><span className="sr-only">youtube</span></a></li>
            </ul>

                <div>
                <p id="newsletterLabel">Sign up for our Newsletter</p>

                <div className="form-group">
                   
                    <input type="email" className="form-control" id="newsletter-email" 
                    placeholder="Enter your email" 
                     pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    name="emailAddress" aria-labelledby="newsletterLabel" />
                    <button className="btn-primary btn-sm" type="submit" id="newsletterSubscribeSubmit">Sign Up</button>  
                </div>
            </div>
            </div>

            <div className={styles.row}>
        <p className="disclaimer">&copy; {new Date().getFullYear()} The University of Chicago Medical Center. All rights reserved.</p>
   </div>
        </footer>
    )
}