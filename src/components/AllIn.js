import React from 'react';
import '../index.css';
import tcfLogo from '../images/tcf-logo.png'
import tcfPage from '../images/tcf-page.png'
import tcfWireframe from '../images/tcf-wireframe.png'
import tcf2 from '../images/tcf-v1.png'
import tcf1 from '../images/tcf-v1.2.png'
import tcf3 from '../images/tcf-3.png'
import tcf4 from '../images/tcf-4.png'
import tcf5 from '../images/tcf-5.png'
import tcf6 from '../images/tcf-6.png'
import tcf7 from '../images/tcf-7.png'


export function AllIn(props) {
    return (
        <section class="project" id="project">
               <h2 class="title-2"> 🧳 All In </h2>
               <div class="about-content" >
                    <i>All In is a job post screening tool that supports Canadian employers in producing more inclusive job postings to attract a more diverse set of candidates.</i>
                </div>

               <h2 class="title-3"> Context </h2>
               <div class="about-content">
                    The Career Foundation (TCF) is a non-profit organization that provides employment services to job seekers within Ontario. As a part of Accenture's pro bono services, TCF leveraged the opportunity to work with Accenture with an idea to build a digital tool to generate more inclusive job postings. 
               </div>

               <img src={tcfLogo}/>

               <h2 class="title-3"> Preceeding Work </h2>
               <div class="about-content">
                    Given that TCF had a rough idea of the path they wanted to embark on with the digital tool, the initial team decided to conduct 20 interviews with various stakeholders, such as TCF executives, job seekers (end-users) of variable minorities, employers of various sizes and internal Accenture employees.
                    <br/><br/>
                    The interviews conducted were to identify pain points of a job seeker's journey in applying for roles and to identify pain points of an employer's journey seeking diverse talent. At the end of each interview, users were then asked how their experience would change provided some sort of tool was there to aid in the creation of more inclusive and empowering job postings.
                    <br/><br/>
                    A survey was also distributed to approxiamtely 1,000 recipients as a part of TCF to further assess the demand for the tool and the needs of the future end-users.
                    <br/><br/>
                    The major findings include an identified demand for a tool and a set of user and business requirements. Additionally, a rough visualization of the tool or "wireframe" was produced as a result of the findings.
               </div>

               <img src={tcfWireframe}/>


               <h2 class="title-3"> My Contributions </h2>
               <div class="about-content">
                    I joined this project as the sole User Experience Designer and Front-End Developer. Given that it was already decided that a digital tool was to be developed in the form of a web application, my contributions involved creating high fidelity clickable prototypes using Adobe Xd, conducting user interviews to assess user interactions of prototype iterations and developing/shipping the tool using front-end development technologies.
               </div>

               <img src={tcfPage}/>

                <h2 class="title-3"> Product Iterations </h2>

                <div class="about-content"> 
                    Within this section, I will walk you through the 4 iterative cycles I went through and the key changes that were produced.
                </div>

                <h2 class="title-4"> Iteration #1: </h2>

                <img src={tcf2}/>

                <div class="about-content">
                    As per the user requirements, users will be presented with a form in order to input their job title as well as their job description that they intend to screen. This is displayed on the left-hand side with the ability to undo, redo and clear their input. Once the user selects generate, the right-hand side is populated with an inclusivity score and a set of suggested changes.
                    <br/><br/>
                    The initial side-by-side layout was designed in order to provide users with the ability to view both the inputted content as well as the suggested changes. The 'My profile' linked to a aspirational unscoped analytics page. The 'Learn more' linked to an aspirational how-to guide. The colours used were TCF trademark colours. Tooltips were also scattered across the tool to aid in user's experience learning how to navigate it.
                </div>

                <img src={tcf1}/>

                <div class="about-content">
                    The above is a populated example of the first iterated prototype. A user is given a score that varies along a gradient from red, a score of 0%, to green, a score of 100%. You will also find that there are two types of suggested changes populated in the form of expandable cards. 
                    <br/><br/>
                    The two types of suggested changes include replacements, which are specific key words/phrases that should be replaced within the job description, and improvements, which are general suggestions that can be actioned offline.
                    <br/><br/>
                    Lastly, the "Export As..." button allows users to generate a Microsoft Word document with a more in-depth analysis of the job description's scoring.
                </div>

                <h2 class="title-4"> Iteration #2: </h2>

                <img src={tcf3}/>

                <div class="about-content">
                    Upon assessing the technical requirements and architecture of the site, it was determined that the web application should have a seperate space to view live changes to the job description, as opposed to the changes happening live in the input form space. This allowed for a seperation of concerns as seen in the prototype above.
                </div>

                <h2 class="title-4"> Iteration #3: </h2>

                <img src={tcf4}/>

                <div class="about-content">
                    After conducting interviews with 6 users, interviewers and I learned that users desired a less obtrusive colour-choice for the background of the edit section. Users also expressed interest in seeing an overall tracker that contained the score, as well as the count of replacements and recommendations remaining.
                    <br/><br/>
                    At this stage in the project, the client had expressed interest in adding in an accessbility panel at the main landing page in order to support users with visual impairment. This feature allows users to toggle the size of text on the page, as well as switch the contrast.
                </div>
                
                <img src={tcf5}/>

                <div class="about-content">
                    Users also expressed dissatisfaction with the difficulty in locating where on the job description a piece of text as changed. A highlighted green bar was then placed over phrases/words that were replaced.

                    Additionally, suggested changes that are acknowledged by the users are hidden. However, they are retrievable using the undo/redo feature.
                </div>

                <h2 class="title-4"> Iteration #4: </h2>

                <img src={tcf7}/>

                <div class="about-content">
                    Further user input and feedback was gathered through client Steerco sessions. It was determined that users preferred highlighted text on the expansion of a Replacement card, as opposed to solely when a card was accepted. Users also prefered text-based buttons, as opposed to icon-based buttons, for the accepting and rejecting of repalacement cards. This also deemed useful for the undo and redo features, which were exclusively icon-based buttons that are not icon- and text-based buttons.
                    <br/><br/>
                    The accessbility panel shifted to it's own section that becomes hidden as the screen size changes.
                </div>

                <img src={tcf6}/>

                <div class="about-content">
                    On expansion of the Recommendation card, users would be given a suggestion that can be actioned offline by clicking the "I understand" button. Recommendation cards do not impact the core.
                </div>

                <h2 class="title-3"> The Deliverable </h2>

                <div class="about-content">
                    The final deliverable was a fully functioning site, that can be accessed via the following link: <a style={{margin: "20px"}} href="https://allin.careerfoundation.com/">https://allin.careerfoundation.com</a>

                    The tool was shipped to the client and integrated with their system with the help of the back-end developer on the team. All the front-end components were built by myself. As I built the tool, I discovered my own difficulties as I translated the design into practical code.      
                </div>


        </section> 
    )
}

  