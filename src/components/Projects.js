import React, {useState} from 'react';
import '../index.css';
import {SmartTrax} from './SmartTrax';
import {AllIn} from './AllIn';
import {Hub} from './Hub';

/**
 * Renders the Nominations components which provides a list of the nominated movies found, their title, their year released, their poster as well as a button to remove the movie from their nominations list.
 */
// 1 = project1

export function Projects(props) {
    const [selectedProject, setSelectedProject] = useState(0);
    return (
        <div class="about" id="about">
            <div class="max-width">
               <h2 class="title">Coding Projects </h2>
                <button class={"project-button" + (selectedProject === 0 ? "-selected" : "")} onClick={() => setSelectedProject(0)}> All In </button>
                <button class={"project-button" + (selectedProject === 1 ? "-selected" : "")} onClick={() => setSelectedProject(1)}> Junior Workshop Designer</button>
                <button class={"project-button" + (selectedProject === 2 ? "-selected" : "")} onClick={() => setSelectedProject(2)}> Sustainable Housing Development </button>
                <button class={"project-button" + (selectedProject === 3 ? "-selected" : "")} onClick={() => setSelectedProject(3)}> SmartTrax </button> */}
                {selectedProject === 0 && <div><AllIn/></div>}
                {selectedProject === 1 && <div><Hub/></div>}
                {selectedProject === 2 && <div>Proj2</div>}
                {selectedProject === 3 && <div><SmartTrax/></div>}
                
            </div>
        </div>
    )
}

  