import React, { useEffect } from 'react';

const SkillBar = ({ title, percentage }) => {
//   useEffect(() => {
//     const progressContent = document.querySelectorAll('.progress-content');
//     const progressNumberMark = document.querySelectorAll('.progress-number-mark');

//     progressContent.forEach((element) => {
//       const width = percentage;
//       element.animate(
//         [{ width: '0%' }, { width }],
//         {
//           duration: 2000,
//           fill: 'forwards',
//         }
//       );
//     });

//     progressNumberMark.forEach((element) => {
//       const left = percentage;
//       const percentElement = element.querySelector('.percent');

//       element.animate(
//         [{ left: '0%' }, { left }],
//         {
//           duration: 2000,
//           fill: 'forwards',
//         }
//       ).onfinish = () => {
//         const data = Math.round(parseFloat(left));
//         if (percentElement) {
//           percentElement.innerHTML = ${data}%;
//         }
//       };
//     });
//   }, [percentage]);

  return (
    <div className="skill-bar" data-percentage={percentage}>
      <h4 className="progress-title-holder">
        <span className="progress-title">{title}</span>
        <span className="progress-number-wrapper">
          <span className="progress-number-mark">
            <span className="percent"></span>
            <span className="down-arrow"></span>
          </span>
        </span>
      </h4>

      <div className="progress-content-outter">
        <div className="progress-content"></div>
      </div>
    </div>
  );
};

const AllSkillBars = () => {
  const skills = [
    { title: 'Digital Marketing', percentage: '75%' },
    { title: 'Brand Strategy', percentage: '85%' },
    { title: 'Competitor Analysis', percentage: '95%' },
  ];

  return (
    <div className="all-skill-bar">
      {skills.map((skill, index) => (
        <SkillBar
          key={index}
          title={skill.title}
          percentage={skill.percentage}
        />
      ))}
    </div>
  );
};

export default AllSkillBars;