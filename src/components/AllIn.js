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
import tcf8 from '../images/tcf-8.png'
import tcf9 from '../images/tcf-9.png'
import tcf10 from '../images/tcf-10.png'
import tcf11 from '../images/tcf-11.png'
import tcf12 from '../images/tcf-12.png'
import tcf13 from '../images/tcf-13.png'
import tcf14 from '../images/tcf-14.png'
import tcf15 from '../images/tcf-15.png'
import tcf16 from '../images/tcf-16.png'
import tcf17 from '../images/tcf-17.png'


export function AllIn(props) {
    return (
        <section class="project" id="project">
               <h2 class="title-2"> 🧳 All In </h2>
               <div class="about-content" >
                    <i>All In is a job post screening tool that supports Canadian employers in producing more inclusive job postings to attract a more diverse set of candidates.</i>

                    <i> <span style={{textDecoration: "underline"}}> Duration:</span> 3 months. </i>
                </div>

               <h2 class="title-3"> 🔍 Context </h2>
               <div class="about-content">
                    The Career Foundation (TCF) is a non-profit organization that provides employment services to job seekers within Ontario. As a part of Accenture's pro bono services, TCF leveraged the opportunity to work with Accenture with an idea to build a digital tool to generate more inclusive job postings. 
               </div>

               <img src={tcfLogo}/>

               <h2 class="title-3"> ⏮ Preceeding Work </h2>
               <div class="about-content">
                    Given that TCF had a rough idea of the path they wanted to embark on with the digital tool, the initial team decided to conduct 20 interviews with various stakeholders, such as TCF executives, job seekers (end-users) of variable minorities, employers of various sizes and internal Accenture employees.
                    <br/><br/>
                    The interviews conducted were to identify pain points of a job seeker's journey in applying for roles and to identify pain points of an employer's journey seeking diverse talent. At the end of each interview, users were then asked how their experience would change provided some sort of tool was there to aid in the creation of more inclusive and empowering job postings.
                    <br/><br/>
                    Additionally, a survey was distributed to approxiamtely 1,000 recipients within the TCF to further assess the demand for the tool and the needs of future end-users.
                    <br/><br/>
                    The major findings include a vocalized demand for a tool and a set of user and business requirements. Lastly, a rough visualization of the tool or "wireframe" was produced as a result of the findings.
               </div>

               <img src={tcfWireframe}/>


               <h2 class="title-3"> 👋🏼 My Contributions </h2>
               <div class="about-content">
                    I joined this project as the sole User Experience Designer and Front-End Developer. Given that it was already decided that a digital tool was to be developed in the form of a web application, my contributions involved creating high fidelity clickable prototypes using Adobe Xd, conducting user interviews to evaluate user interactions of the prototypes and developing/shipping the tool using front-end development technologies.
               </div>

               <img src={tcfPage}/>

                <h2 class="title-3"> 🔁 Product Iterations </h2>

                <div class="about-content"> 
                    Within this section, I will walk you through the 4 cycles I went through and the key changes that were produced.
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
                    The above is a populated example of the first prototype. A user is given a score that varies along a gradient from red, a score of 0%, to green, a score of 100%. You will also find that there are two types of suggested changes populated in the form of expandable cards. 
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
                    After conducting interviews with 6 users, other interviewers and I learned that users desired a less obtrusive colour-choice for the background of the edit section. Users also expressed interest in seeing an overall tracker that contained the score, as well as the count of replacements and recommendations remaining.
                    <br/><br/>
                    At this stage in the project, the client had expressed interest in adding in an accessbility panel at the main landing page in order to support users with visual impairment. This feature allows users to toggle the size of text on the page, as well as switch the contrast.
                </div>
                
                <img src={tcf5}/>

                <div class="about-content">
                    Users also expressed dissatisfaction with the difficulty in locating where on the job description a piece of text has changed. A highlighted green bar was then placed over phrases/words that were replaced.

                    Additionally, suggested changes that are acknowledged by the users are hidden. However, they are retrievable using the undo/redo feature.
                </div>

                <h2 class="title-4"> Iteration #4: </h2>

                <img src={tcf7}/>

                <div class="about-content">
                    Further user input and feedback was gathered through client Steerco sessions. It was determined that users preferred highlighted text on the expansion of a Replacement card, as opposed to solely when a card was accepted. Users also prefered text-based buttons, as opposed to icon-based buttons, for the accepting and rejecting of replacement cards. This also deemed useful for the undo and redo features, which were exclusively icon-based buttons that are now icon- and text-based buttons.
                    <br/><br/>
                    The accessbility panel shifted to it's own section that becomes hidden as the screen size changes.
                </div>

                <img src={tcf6}/>

                <div class="about-content">
                    On expansion of the Recommendation card, users would be given a suggestion that can be actioned offline by clicking the "I understand" button. Recommendation cards do not impact the score.
                </div>

                <h2 class="title-3"> ✅ The Deliverable </h2>

                <div class="about-content">
                    The final deliverable was a fully functioning site, that can be accessed via the following link: <a style={{margin: "20px"}} href="https://allin.careerfoundation.com/" target="_blank">https://allin.careerfoundation.com</a>

                    The tool was shipped to the client and integrated with their system with the help of the back-end developer on the team. All the front-end components were built by myself. As I built the tool, the design evolved as I faced obstacles translating mock-ups into practical code and as I recieved novel business requirements from the client past the design phase.
                    <br/><br/>
                    The design evolution included the following:
                </div>

                <h2 class="title-4"> Bulk Upload: </h2>
                
                <img src={tcf10}/>

                <div class="about-content">
                    A bulk upload feature, where users would be able to upload more than one job posting in the format of a row in an Excel or CSV file. You can access the bulk upload feature by toggling a switch on the top of the form. Users will be offered the option to download a template in order to fill out their multiple job descriptions and then required to upload it, along with their email, in order to receive the same document back with additional columns that contained their score, their performance metrics and other suggestions. Users are also emailed a reference number such that they can access the downloadable screened document through the site as well.
                </div>

                <h2 class="title-4"> Form Validation: </h2>
                
                <img src={tcf12}/>

                <div class="about-content">
                    Users are expected to enter a job title and a job description of at least 60 words before generating a set of suggestions. Form error-handling and completion was built in and signaled ot the user by outlining the mandatory fields.
                </div>

                <h2 class="title-4"> Progress Bars: </h2>
                
                <img src={tcf13}/>

                <div class="about-content">
                    Category titles were added to the suggested changes section and progress bars for each category were added to the tracker. This is to support the users in compartmentalizing the suggestions and earn a sense of productivity as they interact with the cards.    
                </div>

                <h2 class="title-4"> Cards: </h2>

                <img style={{width: "200px"}} src={tcf15}/>

                <div class="about-content">
                    Cards labeled as Recommendations have been renamed to Suggestions.
                </div>
                
                <img style={{width: "400px"}} src={tcf14}/>

                <div class="about-content">
                    Instead of "I Understand" being the actionable button title for the suggestion cards, they are now titled "Action Offline" as per the client's request.
                </div>

                <img style={{width: "400px"}} src={tcf16}/>

                <div class="about-content">
                    Replacement cards that have multiple options for word replacements are structured such that each word get it's own button, along with a "Don't Change" button. This it to accommodate for Replacement cards with multiple options.
                </div>

                <img style={{width: "400px"}} src={tcf17}/>

                <div class="about-content">
                    Users are also able to copy their most up-to-date job description to their clipboard once they are satisfied with their changes and thier imporved score. This feature was embedded due to the demand for easily moving the content over to platform such as LinkedIn or applications such as Microsoft Word.
                </div>

                <h2 class="title-3"> ⏱ What Could've Been </h2>

                <div class="about-content">
                    I do believe, as with many designs, there are a multitude of improvements and alterations that would have enhanced the user's experience. In this section, I would like to walk you through some of the considerations I've had mulled over in my head over the past few weeks.

                    <ul style={{paddingLeft: "30px", lineHeight: "2"}}>
                        <li> There is plenty of room for improvement within the <span style={{fontWeight: "bold"}}> bulk upload feature</span>. The current feature does not allow for live changes nor does the individual form allow for a speedier approach to processing the job descriptions. The vision for future versions of the bulk upload feature would mimic more closely how Grammarly web application allows users to screen through pieces of text.  </li>
                        <li> The <span style={{fontWeight: "bold"}}> inclusivity score </span> is still of hot debate amongst client executives and the internal team. Some argue that it allows for users to feel more involved in the improvement of their job descriptions, whereas others fell suspect to it's validity. There was conversation on perhaps using textual or icon-based scoring, however, a numeric score was preferred that toggles into a "Fail" score upon receiving a score below 50%. </li>

                    </ul>
                    
                </div>

                <div class="about-content">
                    <br/><br/>
                </div>

        </section> 
    )
}

  