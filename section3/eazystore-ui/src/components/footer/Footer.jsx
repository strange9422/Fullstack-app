import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

export default function(){
    return(
        <footer className="footer">
            Built with  
            <FontAwesomeIcon icon={faHeart} className="footer-icon" aria-hidden="true"/>
            by 
            <a href="https://mellifluous-yeot-81b19b.netlify.app/" target="_blank" rel="noreferrer">
                Code with Nishant!
            </a>
        </footer>
    );
}