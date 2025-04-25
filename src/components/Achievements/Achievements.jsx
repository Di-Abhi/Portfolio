import React, { useEffect, useRef, useState } from 'react';
import './Achievements.css';
import { FaTrophy, FaCode, FaBolt } from 'react-icons/fa';

const achievements = [
  {
    title: '250+ Problems Solved on LeetCode',
    description: 'Strengthened DSA skills with consistent problem solving.',
    icon: <FaCode />,
    link: 'https://leetcode.com/u/Abhi-Rathour/' // Replace with your actual LeetCode profile link
  },
  {
    title: '1550+ LeetCode Rating',
    description: 'Achieved through regular contests and practice.',
    icon: <FaTrophy />,
    link: 'https://leetcode.com/u/Abhi-Rathour/' // Or your profile if you want to show rating
  },
  {
    title: 'DSA Enthusiast',
    description: 'Regularly learning and improving Data Structures and Algorithms.',
    icon: <FaBolt />,
    link: 'https://www.geeksforgeeks.org/user/abhi995e6l/' // General tag link
  },
];

const Achievements = () => {
  const pathRef = useRef(null);
  const containerRef = useRef(null);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const path = pathRef.current;
    const container = containerRef.current;
    if (!path || !container) return;

    const pathLength = path.getTotalLength();
    const spacing = pathLength / (achievements.length + 1);

    const pos = achievements.map((_, i) => {
      const point = path.getPointAtLength(spacing * (i + 1));
      return {
        x: point.x,
        y: point.y,
      };
    });

    setPositions(pos);
  }, []);

  return (
    <section className="achievements" id="achievements">
      <h2 className="achievements-title">Coding Platform</h2>
      <div className="timeline-container" ref={containerRef}>
        <svg className="timeline-svg" width="400" height="800">
          <path
            ref={pathRef}
            d="M200,0 
               C100,150 300,250 200,350 
               S100,550 200,650 
               S300,750 200,800"
            stroke="var(--main-color)"
            fill="none"
            strokeWidth="4"
          />
        </svg>

        {positions.map((point, index) => (
          <div
            key={index}
            className="timeline-point"
            style={{
              top: `${point.y}px`,
              left: `${point.x}px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="icon-dot">{achievements[index].icon}</div>
            <div className={`achievement-popup ${index % 2 === 0 ? 'left' : 'right'}`}>
              <h3>
                <a href={achievements[index].link} target="_blank" rel="noopener noreferrer">
                  {achievements[index].title}
                </a>
              </h3>
              <p>{achievements[index].description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
