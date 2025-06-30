import bg_portfolio from "../assets/bg_portfolio.png";
import "./product.css";
import time_saving from "../assets/time_saving.png";
import decision_making from "../assets/decision_making.png";
import reporting from "../assets/reporting.png";
import { useEffect, useState } from "react";
import { urlFor, client } from "../client";
export default function Product() {
  //const benefits = [
  //  {
  //    icon: time_saving,
  //    title: "Time-Saving Efficiency",
  //    text: "Pearl Analytics can drive performance improvements through increasing focus on the issues that matter, automating the time-consuming process of creating board reports, and reducing preparation time from hours to minutes. This allows boards, management and governance professionals to focus on analyzing data and providing strategic insights rather supported by facts, insights and actions that matter.",
  //  },
  //  {
  //    icon: time_saving,
  //    title: "Time-Saving Efficiency",
  //    text: "Pearl Analytics can drive performance improvements through increasing focus on the issues that matter, automating the time-consuming process of creating board reports, and reducing preparation time from hours to minutes. This allows boards, management and governance professionals to focus on analyzing data and providing strategic insights rather supported by facts, insights and actions that matter.",
  //  },
  //  {
  //    icon: time_saving,
  //    title: "Time-Saving Efficiency",
  //    text: "Pearl Analytics can drive performance improvements through increasing focus on the issues that matter, automating the time-consuming process of creating board reports, and reducing preparation time from hours to minutes. This allows boards, management and governance professionals to focus on analyzing data and providing strategic insights rather supported by facts, insights and actions that matter.",
  //  },
  //];

  const [benefits, setBenefits] = useState([]);
  const result = useEffect(() => {
    const query = '*[_type=="benefits"]';
    client.fetch(query).then((data) => setBenefits(data));
  }, []);

  return (
    <div id="product">
      <div className="product">
        <div className="productImg">
          <img src={bg_portfolio} alt="product image" />
        </div>
        <div className="productText">
          <h2>Trusted by leaders, crafted by experts</h2>
          <p>
            For decision-makers who value data-driven debate as the starting
            point, supported by practical recommendations. Pearl Analytics is
            the essential tool for Chairs, Directors, CEOs, Company Secretaries
            and Investors who require precise, data-driven insights to guide
            strategic decisions.
          </p>
        </div>
      </div>
      <div className="benefits">
        <div className="benefits-title">
          <h2>Benefits</h2>
        </div>
        <div className="cards">
          {benefits.map((benefit) => (
            <div className="card" key={benefit.title}>
              <div className="cardIcon">
                <img src={urlFor(benefit.iconURL).url()} alt="icon" />
              </div>
              <div className="cardTitle">{benefit.title}</div>
              <div className="cardDescription">{benefit.description}</div>
            </div>
          ))}

          {/*
          <div className="card">
            <div className="cardIcon">
              <img src={time_saving} alt="icon" />
            </div>
            <div className="cardTitle">Time-Saving Efficiency</div>
            <div className="cardDescription">
              Pearl Analytics can drive performance improvements through
              increasing focus on the issues that matter, automating the
              time-consuming process of creating board reports, and reducing
              preparation time from hours to minutes. This allows boards,
              management and governance professionals to focus on analyzing data
              and providing strategic insights rather supported by facts,
              insights and actions that matter.
            </div>
          </div>
          <div className="card">
            <div className="cardIcon">
              <img src={decision_making} alt="icon" />
            </div>
            <div className="cardTitle">Enhanced Decision-Making</div>
            <div className="cardDescription">
              By transforming complex data into intuitive visuals and clear
              narratives, Pearl Analytics empowers board members to make
              informed decisions with greater confidence. Benefit from critical
              information presented in an easily digestible format, fostering
              better discussions and faster consensus.
            </div>
          </div>
          <div className="card">
            <div className="cardIcon">
              <img src={reporting} alt="icon" />
            </div>
            <div className="cardTitle">Customizable Reporting</div>
            <div className="cardDescription">
              Pearl Analytics offers highly customizable report templates that
              can be tailored to reflect the unique needs of your board. Pearl
              Analytics ensures your reports are always on point, impactful and
              align with organizational strategy.
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  );
}
