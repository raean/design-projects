import React from 'react';
import '../index.css';
import pdf from '../docs/rae_abunahla_resume_july_2021.pdf';

/**
 * Renders the Nominations components which provides a list of the nominated movies found, their title, their year released, their poster as well as a button to remove the movie from their nominations list.
 */
export function NaviBar(props) {

    return (
    <div>
        <script src="https:kit.fontawesome.com/a076d05399.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

        <nav className="navbar">
        <div class="max-width">
            <div class="logo">
                <a href="#"> 
                <span>Portfo</span>lio. 
                </a>
                </div>
                <ul class="menu">
                <li><a href="/">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/design-projects"> Design </a></li>
                <li><a href="/code-projects"> Code </a></li>
                {/* <li><a href="#contact">Contact</a></li> */}
                <li><a href={pdf} target="_blank" class="resume" without rel='noopener noreferrer'>Resume</a></li>
                </ul>
                <div className="menu-btn">
                <i class="fas fa-bars"></i>
                </div >
            </div>
        </nav>
    </div>
    )
}

  