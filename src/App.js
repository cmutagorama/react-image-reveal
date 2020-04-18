import React, { useRef, useEffect } from "react";
import "./App.scss";
import people from "./img/people.webp";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { gsap, TimelineLite, Power2 } from "gsap";

gsap.registerPlugin(CSSRulePlugin);

const App = () => {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  const tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, 0, { visibility: "visible" })
      .to(imageReveal, 1.4, {
        width: "0%",
        ease: Power2.easeInOut,
      })
      .to(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 });
  });

  return (
    <section className="main">
      <div className="container" ref={(el) => (container = el)}>
        <>
          <div className="img-container">
            <img src={people} alt="People" ref={(el) => (image = el)} />
          </div>
        </>
      </div>
    </section>
  );
};

export default App;
