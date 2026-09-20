import React, { useMemo } from 'react';

// The starfield used to be a Sass `@for 1 through 300` loop with random()
// offsets spread across 4000px, only kept off-screen by an ancestor's
// overflow: hidden. Positions are now generated here and bounded to the square
// that the rotating field sweeps through: the canvas diagonal, centred on the
// canvas, so corners stay populated as the field turns without any star sitting
// thousands of pixels out.
const STAR_COUNT = 180;
const FIELD_SIZE = 944; // ceil(sqrt(800^2 + 500^2))

function createStars() {
  return Array.from({ length: STAR_COUNT }, () => ({
    left: Math.random() * FIELD_SIZE,
    top: Math.random() * FIELD_SIZE,
    duration: 2 + Math.random() * 8,
    delay: Math.random() * 10,
  }));
}

function Space() {
  const stars = useMemo(createStars, []);

  return (
    <div className="star-field" style={{ '--field-size': `${FIELD_SIZE}px` }} aria-hidden="true">
      {stars.map((star, index) => (
        <span
          key={index}
          className="star"
          style={{
            left: `${star.left}px`,
            top: `${star.top}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default Space;
