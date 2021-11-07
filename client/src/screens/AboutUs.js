import React from "react";
import user1 from "../assets/user2.png";
import user2 from "../assets/user3.png";
import user3 from "../assets/user1.png";
import user4 from "../assets/user4.png";
import user5 from "../assets/user5.png";
import user6 from "../assets/user6.png";
import user7 from "../assets/user7.png";
import user8 from "../assets/user8.png";
import user9 from "../assets/user9.png";
import user10 from "../assets/user10.png";
import user11 from "../assets/user11.png";
import Footer from "../components/Footer";

function AboutUs() {
  const team = [
    {
      name: "Chris Britt",
      position: "CEO & CO-FOUNDER",
      image: user1,
    },
    {
      name: "Ryan King",
      position: "CTO & CO-FOUNDER",
      image: user2,
    },
    {
      name: "Melissa Alvarado",
      position: "CMO",
      image: user3,
    },
    {
      name: "Mark Troughton",
      position: "COO",
      image: user4,
    },
    {
      name: "Matt Newcomb",
      position: "CFO",
      image: user5,
    },
    {
      name: "Kate Karas",
      position: "GENERAL COUNSEL",
      image: user6,
    },
    {
      name: "Zach Smith",
      position: "SVP, PRODUCT",
      image: user7,
    },
    {
      name: "Beth Steinberg",
      position: "CSVP, PEOPLE",
      image: user8,
    },
    {
      name: "Brian Mullins",
      position: "SVP, RISK",
      image: user9,
    },
    {
      name: "Janelle Sallenave",
      position: "SVP, OPERATIONS AND MEMBER EXPERIENCE",
      image: user10,
    },
    {
      name: "Dennis Yu",
      position: "CHIEF OF STAFF",
      image: user11,
    },
  ];

  return (
    <div className="container text-center mt-5 pt-5">
      <h3 className="heading px-5">
        We’re changing the way people think about banking
      </h3>
      <p className="px-5 mt-3">
        Fedex Bank is a financial technology company founded on the premise that
        basic banking services should be helpful, easy and free. We want to
        profit with our members, not from them. That’s why our model doesn’t
        rely on overdraft fees, monthly service fees, service fees, minimum
        balance requirements, and more. We partner with regional banks to design
        member first financial products. This creates a more competitive market
        with better, lower-cost options for everyday Americans who aren’t being
        served well by traditional banks. We help drive innovation, inclusion,
        and access across the industry.
      </p>
      <div
        className="my-5 py-5"
        style={{ background: "#3f077e", color: "white" }}
      >
        <h3 className="heading px-5">Our Mission</h3>
        <p className="px-5 mt-3">
          We created Fedex Bank because we believe everyone deserves financial
          peace of mind. We’re building a new kind of online bank account that
          helps members get ahead by making managing money easy. It’s your
          money. It’s your life. Fedex Bank in.
        </p>
      </div>
      <div className="my-5 py-5 bg-light">
        <h3 className="heading mb-5">Leadership Team</h3>
        <div className="row mt-5">
          {team.map((team) => (
            <div className="col-lg-3 mb-5">
              <img
                src={team.image}
                alt={team.name}
                width="80%"
                className="mb-3"
              />
              <h4>{team.name}</h4>
              <h4 style={{ color: "#b3adac" }}>{team.position}</h4>
            </div>
          ))}
        </div>
      </div>
      <h3 className="heading px-5">Our Culture</h3>
      <p className="px-5 mt-3 mb-5">
        We believe that creating a company where people love to work is built on
        relationships, growth, and impact. We cultivate a culture of low ego and
        set a high bar for excellence. We believe in flat organizations and open
        work spaces. We treat one another inside the company the same way we
        treat our members–by communicating in ways that build trust, operating
        with transparency, and having one another’s back. We recognize the
        contributions of individuals and celebrate wins as a team. Every member
        of the team is an owner of the company and is encouraged to “Fedex Bank
        In” on any part of the business. What we all have in common is a mission
        that starts with heart, and a desire to work together to create
        something of lasting value and personal impact for our employees and
        members alike.
      </p>
      <Footer />
    </div>
  );
}

export default AboutUs;
