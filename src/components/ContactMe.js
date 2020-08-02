import React from 'react';
import Facebook from '../img/facebook-icon.png'
import Instagram from '../img/instagram-icon.png'
import LinkedIn from '../img/linkedin-icon.png'
import Github from '../img/github-icon.png'
import Email from '../img/email-icon.png'

const ContactMe = () => {
    return (
        <div className="content">
            <div className="content-1">
                <p className="content__paragraph">
                    In this section you will be able to reach me out with any of these links
                </p>
                <p className="content__paragraph">
                    Feel free to either send me a message or send me a request
                </p>
                <div className="social-media">
                    <a href="https://www.facebook.com/raul.oliva.castillo.28" target="_blank" rel="noopener noreferrer">
                        <img className="social-media-icon" src={ Facebook } alt="Facebook Icon"/>
                    </a>
                    <a href="https://www.instagram.com/raul_oliva_cas/" target="_blank" rel="noopener noreferrer">
                        <img className="social-media-icon" src={ Instagram } alt="Instagram Icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/raul-oliva-27208817b/" target="_blank" rel="noopener noreferrer">
                        <img className="social-media-icon" src={ LinkedIn } alt="Linkedin Icon"/>
                    </a>
                    <a href="https://github.com/rauloliva" target="_blank" rel="noopener noreferrer">
                        <img className="social-media-icon" src={ Github } alt="Github Icon"/>
                    </a>
                    <a href="mailto:oliva.raul12@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img className="social-media-icon" src={ Email } alt="Email Icon"/>
                    </a>
                </div>
                <p className="content__paragraph">
                    I would appriciate any feedback of any of my projects listed in <b><i>My Projects</i></b> section, including this web page of course.
                </p>
                <p className="content__paragraph">
                    If you would like to give your feedback, you can do so in any of my social media accounts listed above
                    or sending me an email, you can do so by clicking at the mail icon.
                </p>
            </div>
        </div>
    )
}

export default ContactMe