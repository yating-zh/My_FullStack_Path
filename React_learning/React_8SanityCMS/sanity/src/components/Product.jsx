import bg_portfolio from "../assets/bg_portfolio.png";
import "./product.css";
import time_saving from "../assets/time_saving.png";
import decision_making from "../assets/decision_making.png";
import reporting from "../assets/reporting.png";
import { useEffect, useState } from "react";
import { urlFor, client } from "../client";
export default function Product() {
  const [benefits, setBenefits] = useState([]);
  const result = useEffect(() => {
    const query = '*[_type == "benefits" && !(_id in path("drafts.**"))]';
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
        </div>
      </div>
    </div>
  );
}
