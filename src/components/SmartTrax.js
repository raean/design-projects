import React from "react";
import "../index.css";
import hub1 from "../images/hub-1.png";
import hub3 from "../images/hub-3.jpg";
import { Break } from "./Break";
import st7 from "../images/st-7.png";
import st17 from "../images/st-17.png";
import st4 from "../images/st-4.jpeg";
import st12 from "../images/st-12.png";
import st14 from "../images/st-14.png";
import st15 from "../images/st-15.png";
import st18 from "../images/st-18.png";
import st19 from "../images/st-19.png";


export function SmartTrax(props) {
  return (
    <section class="project" id="project">
      <h2 class="title-2"> 🚛 SmartTrax </h2>

      <div class="about-content">
        <i>
          SmartTrax is a digital platform that connects & provides waste
          management services to both businesses and waste management companies.
          It is an efficient way to collect organics for more vibrant cities and
          planet. You can find the full presentation{" "}
          <a
            href="https://docs.google.com/presentation/d/1l7OCuqQdZFUVF6_QWOwJVwXCstPg9rZdGEnnbkj4S6A/edit?usp=sharing"
            target="_blank"
            style={{ padding: "1px 8px", margin: "0", textDecoration: "none" }}
          >
            here.
          </a>
        </i>
        <i>
          {" "}
          <span style={{ textDecoration: "underline" }}> Duration:</span> 3
          months{" "}
        </i>
      </div>

      <img src={st7} />

      <h2 class="title-3"> 📌 Problem Statement </h2>
      <div class="about-content">
      Literal tons of organic waste are sent to the landfills every year in Ontario. This often stems from the difficulty of organic waste management & transport between business owners and waste management companies. Business owners find that waste collation is not frequent or variable enough, while waste management companies find that they lack an efficient system in collecting waste.
      </div>

      <h2 class="title-3"> 🔍 Context </h2>
      <div class="about-content">
        Desjardins' Cooperathon is the largest Open Innovation challenge in
        Canada often with projects driven by social change across a multitude of
        categories. In 2019, I joined their national competition with no team
        and no idea.
        <Break />
        The competition was structured with biweekly sprints for approximately 3
        months, where you would also receive biweekly design thinking workshops.
        <Break />
        I was part of a four-person team formation with the grand scheme to
        somehow reduce food waste in Canada and so the journey began. We spent
        weeks iterating over producting, with consistent evolution, divergence
        and convergence. It took multiple cycles and even more stakeholder
        interviews before we landed on a prototype and business model.
        <Break />
        Upon presenting it at the provincial competition, we came first place
        and were the only team to make it to the national competition/finals in
        Montreal.
      </div>

      <h2 class="title-3"> 📚 Research & Personas </h2>
      <div class="about-content">
        25 million tonnes of organic waste were sent to the landfills by
        Canadians alone in 2016. That’s equivalent to the amount of emissions
        produced by 56 million cars. It takes 15 years for these to break down,
        all the while releasing harmful methane gases into the atmosphere.
        <Break />
        There are two major stakeholders involved in organic waste. Business
        owners that produce the organic waste and waste management companies
        that collect the organic waste.
        <Break />
        Business owners will often place their organic waste in their regular
        waste bins, which causes the waste to end up in landfills as opposed to
        being put towards more cyclic use. The reason is that the largest pain
        point organic waste producing businesses face is the lack of frequency
        and the rigid schedule that organic waste pick-up occurs in the city. 
        Take Laura as an example, the business owner.

        <img src={st18}/>

        <Break />
        Waste management companies on the other hand, face a different issue.
        They find that they do not have the resources in terms of fleet to
        collect all the organic waste. They also find that often, their routes
        are too inconvenient to embark on and that whether a business has
        organic waste or not seemed random and inconsistent.

      <img src={st19}/>
        
      </div>
      <div class="about-content">
        Our solution consists of a mobile/tablet application for businesses to
        connect to waste management companies via unified service.
        <img src={st4} />
        
        The application consists of a short set-up for business owners to create
        their accounts, create a request for an organic waste pick-up and view
        their insights/progress on their waste management.
        <img src={st12} />
      </div>
      <div class="about-content">
        The great part about this software-as-a-service is that it allows users
        to schedule pick-ups as frequently as they see fit and on the variable
        days that seem most suitable depending on their forecasted organic waste
        production.
        <Break />
        This also is a large win for the waste management companies. Since all
        the request are processed within the same platform and network, the
        application can then provide optimized routes every morning for the
        fleet to embark on such that each truck is taking the shortest route
        possible with an estimated capacity. This scatters out the fleet to be
        used most efficiently in order to maximize savings for the waste
        management companies, reduce organic waste gone to the landfill for
        business owners and, most importantly, it closes the loop from the
        source back the source. How might it complete this?
        <img style={{ width: "900px" }} src={st14} />
      </div>
      <div class="about-content">
        As organic waste is collected from businesses, more of it can be
        distributed to biogas plants in order to convert it into renewable
        natural gas that can be used for heat, electricity and as fuel. There
        are also instances of waste being collected and reused in other means.
        <img src={st15} />
      </div>

      <h2 class="title-3"> 📙 Design Process & Challenges </h2>

      <div class="about-content">
        We spent weeks at the start of the competition researching and
        generating ideas that stemmed from non-perishable food donation programs
        to coffee ground collection services for cosmetics. We eventually landed
        on handling organic waste after in-depth market research and the
        opportunity to interiew an executive chef, a civic innovation strategist
        and multiple food franchise owners.
        <Break />
        We found that outside of social motivation, business owners lacked an
        incentive to take care of their organic waste more effectively. In
        addition to upcoming regulations, we would be open to rewarding
        businesses with revenue in order to create a positive reinforcement
        loop.
        <Break />
        At the time this portfolio piece was published, the product & service is
        still ongoing multiple iterations and receiving consistent feedback from
        multiple stakeholders. There are current partenrships in-place to build
        out the tool and test it practically within the City of Toronto, in
        hopes that it would grow to a provinvical platform, ideally nation-wide
        or global.
       
      </div>

      <img src={st17} />
      <Break /> <Break/> <Break />
    </section>
   
  );
}
