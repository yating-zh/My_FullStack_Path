import reporting from "../assets/reporting.png";
import "./features.css";

export default function Features() {
  return (
    <div id="feature">
      <div className="features">
        <div className="featureTitle">
          <div className="upperCase">Features</div>
          <h2>
            From data to decisions—<span className="focus">faster</span>.{" "}
          </h2>
        </div>
        <div className="fcards">
          <div className="fcard">
            <div className="fcardIcon">
              <img src={reporting} alt="icon" />
            </div>
            <div className="fcardTitle">Survey & Engagement Tools</div>
            <div className="fcardDescription">
              Automated, hands-free surveys built from our expertise developed
              over 20,000 board boardroom interviews and research; our surveys
              provide guides and roadmaps for success across all aspects of
              board performance. Our modules can help your board run fast,
              efficient and enjoyable processes for board governance, director
              skills and talent matrices, boardroom team culture and
              composition, chair and director feedback, board committee
              effectiveness, and much more. View, download and share survey
              reports, displaying both aggregated survey data from your board,
              along with best-practice benchmarks, highlights and areas of
              improvement. Adaptable to any organization structure, size and
              type.
            </div>
          </div>
          <div className="fcard">
            <div className="fcardIcon">
              <img src={reporting} alt="icon" />
            </div>
            <div className="fcardTitle">Data & AI Capabilities</div>
            <div className="fcardDescription">
              Our data and AI capabilities have been built to help you focus on
              where you as a director need to go and can augment your boardroom
              capabilities wherever they could be supplemented (risk and
              regulatory compliance, strategy modelling, future technology
              thinking, vetting and selecting new directors or senior
              executives). Our deeply trained and tested AI Avatars can
              understand your industry and competitors, focus on your company,
              apply best boardroom practices and supplement discussions with
              synthesized summaries and augmented insights – saving your board
              and company time, helping you meet your director obligations, and
              enhancing board and organisational decision making.
            </div>
          </div>
        </div>
        <div className="aboutUs">
          <div>
            <h2>About Us</h2>
            <p>
              Pearl Analytics has been created by the team behind pre-eminent
              specialist board advisory firm Blackhall & Pearl with a foundation
              of over 12 years of providing trusted and bespoke advice to boards
              and executive leadership teams of listed and unlisted companies,
              government agencies, family businesses, superannuation funds and
              not‑for‑profit, community and member-based organisations. Learn
              more about our Trusted Partners <a href="#">here</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
