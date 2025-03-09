// import React from "react";

// const Wave = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 1440 320"
//       className="wave  "

//     >
//       <path
//         fill="rgb(220,165,170)"
//         fillOpacity="1"
//         d="M0,320L80,282.7C160,245,320,171,480,149.3C640,128,800,160,960,192C1120,224,1280,256,1360,272L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
//       ></path>
//     </svg>
//   );
// };

// export default Wave;

// import React from "react";

// const Wave = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 1440 320"
//       className="wave"
//     >
//       <path
//         fill="rgb(243,214,214)" // Fill color for the wave
//         fillOpacity="1"
//         d="M0,192L120,165.3C240,139,480,85,720,69.3C960,53,1200,75,1320,85.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
//       ></path>
//     </svg>
//   );
// };

// export default Wave;

import React from "react";

const SvgWave = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="rgb(243,214,214)"
        fillOpacity="1"
        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );
};

export default SvgWave;



