import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jingzhou Tao </span>
            from <span className="purple"> Seattle, USA.</span>
            <br />I am a master of science student pursuing in Computer Science
            in Northeastern University.
            <br />
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Jingzhou Tao</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
