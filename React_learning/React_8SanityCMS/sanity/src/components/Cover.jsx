import "./cover.css";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/myAnimation.json";

export default function Cover() {
  return (
    <div id="home">
      <div className="cover">
        <div className="coverText">
          <p>
            <span className="uppercase">Pearl Analytics</span>
          </p>
          <h1 className="slogan">
            <span className="focus_text">Revolutionise</span> your board
            performance.
          </h1>
          <p>
            Discover how Pearl Analytics can uncover insights, actions and value
            in the boardroom.
          </p>
          <button>Express Interest</button>
        </div>
        <div className="coverImg">
          <Player
            autoplay
            loop
            src={animationData}
            //style={{ height: "300px", width: "300px" }}
          />{" "}
        </div>
      </div>
      <div className="description">
        <h2>
          Pearl Analytics provides clients with a cutting-edge, AI-driven
          software platform tailored to drive value in boardroom and management
          team discussions
        </h2>
        <div className="descriptionText">
          <p>
            We combine global best-practice benchmarks, practical
            recommendations, and insights from over 20,000 board interviews with
            powerful survey services and cutting-edge, deeply trained AI tools.
          </p>
          <p>
            By automating data integration and visualisation, Pearl Analytics
            transforms information into actionable insights—enabling faster,
            more informed decisions that align with organisational value and
            strategy.{" "}
          </p>
          <p>
            Founded and built by the team behind one of the world’s leading
            board consultancies, our software combines expert board performance,
            strategy, risk and governance practices with powerful analytics
            tools to improve reporting and compliance, synthesize insights and
            align focus to strategic ambitions.
          </p>
        </div>
      </div>
    </div>
  );
}
