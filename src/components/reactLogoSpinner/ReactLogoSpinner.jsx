import React from 'react';
import { useEffect, useRef } from 'react';
import { Linear, gsap } from 'gsap';
import './reactLogo.css';
const ReactLogoSpinner = () => {
  const rotate = useRef(null);
  const rotate1 = useRef(null);
  const rotate2 = useRef(null);

  const rotateElement = () => {
    gsap.to([rotate.current, rotate1.current, rotate2.current], {
      rotate: 360,
      duration: 7,
      repeat: -1,
      stagger: 0.1,
      ease: Linear.easeNone,
    });
  };
  useEffect(() => {
    rotateElement();
  }, []);

  return (
    <div>
      <div className="hero">
        <div
          ref={rotate}
          className=" ellipsoid "
        >
          <div
            className="ellipsoid "
            ref={rotate1}
          >
            <div
              className=" ellipsoid "
              ref={rotate2}
            >
              {' '}
            </div>
          </div>
        </div>

        <div className="circle"></div>
      </div>
    </div>
  );
};

export default ReactLogoSpinner;
