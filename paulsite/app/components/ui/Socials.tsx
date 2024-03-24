import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


export default function Socials() {
  return (
    <div className="socials p-10 space-y-2">
    <ul className="space-y-4"> 
        <li id="Instagram">
            <a href="https://www.instagram.com/paultheprogrammer/" target="_blank" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
            </a>
        </li>
        <li id="Linkedin">
            <a href="https://www.linkedin.com/in/paul-madut" target="_blank" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />
            </a>
        </li>
        <li id="Mail">
            <a href="mailto:paulmadut@paultheprogrammer.ca" target="_blank" aria-label="Mail">
                <FontAwesomeIcon icon={faEnvelope} size="2x" color="white" />
            </a>
        </li>
        <li id="Github">
            <a href="https://github.com/paul-madut" target="_blank" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
            </a>
        </li>
        <li id="Tiktok">
            <a href="https://www.tiktok.com/@paultheprogrammer" target="_blank" aria-label="Tiktok">
                <FontAwesomeIcon icon={faTiktok} size="2x" color="white" />
            </a>
        </li>
    </ul>
</div>

  )
}
