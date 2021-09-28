import React from 'react';
import '../index.css';
import hub1 from '../images/hub-1.png'
import hub3 from '../images/hub-3.jpg'
import {Break} from './Break';

export function Hub(props) {
    return (
        <section class="project" id="project">

               <h2 class="title-2"> 👨🏽‍💻 Junior Innovation Designer </h2>

               <div class="about-content" >
                    <i> I joined The Canada Innovation Hub at Accenture as a Junior Innovation Designer and delivered over 20 workshops across 8 different clients, primarly within the public sector and retail space. Within this role, I facilitated, designed and led workshops with executive members of both the client teams and Accenture's internal teams. </i>

                    <i> <span style={{textDecoration: "underline"}}> Duration:</span> 8 months </i>

                </div>

                <img src={hub1}/>

                <h2 class="title-3"> 🔍 Context</h2>

                <div class="about-content" >
                    A typical engagement within the role involved working with a Lead Designer in order to identify the current state of the client, both within their market and within their relationship with Accenture. We called this the research phase.
                    <Break/>
                    Often clients will come with a set of pain points or aspirations, which are incorporated into the research. At this stage, we would also complete stakeholder interviews, as well as customer surveying, should there be a need.
                    <Break/>
                    Upon attaining a revised high-level goal and expected deliverable, we would seek the support of subject matter advisors (SMAs) in order to help curate and create workshop activities and agendas.
                    <Break/>
                    The workshops oftened contained and were limited to brainstorming, ideation and divergence/convergence activities with human-centric/empathetic intentions. Before the pandemic, the workshops were exclusively in-person engagements that would often span one to three full working days. They often required a multitude of sticky notes and activity posters. Now that workshops are delivered digitally, virtual whiteboarding tools such as Mural are used and are at most 4 hours in length.
                    
                    <img src={hub3}/>
                    
                </div>



                <h2 class="title-3"> 🔦 Highlight </h2>

                <div class="about-content">
                    I really enjoyed the immersive experience that this role provided. I learned a lot about design thinking and workshop facilitation. It helped improve my presentation skills as well as my ability to keep a room of attendees present and engaged.
                    <Break/>
                    I also learned the enormous responsibilities that come with corporate work. Administrative tasks, documentation and detail-oritented work were of critical importance within the role given the seniority of the clients as well as the external image of the team.
                    <Break/>
                    My most eventful highlight was presenting curated analytics from an employee survey I designed to C-suite client members. This informed and aided them as they continued the workshop's activities, and the overall digital transformation of their organization.
                    <Break/>
                    <Break/>
                </div>



        </section> 
    )
}
 
  