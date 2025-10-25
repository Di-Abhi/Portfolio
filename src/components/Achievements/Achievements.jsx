import { useEffect, useState } from 'react';
import './Achievements.css';
import { FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import ScrollReveal from 'scrollreveal';

const Achievements = () => {
  const [stats, setStats] = useState(null);

  // Fetch LeetCode stats dynamically
  useEffect(() => {
    fetch('https://leetcode-stats-api.herokuapp.com/Abhi-Rathour')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error('Error fetching LeetCode stats:', err));
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      distance: '40px',
      duration: 1000,
      reset: true,
    });

    sr.reveal('.achievements-title', { origin: 'top', delay: 200 });
    sr.reveal('.achievement-card', { origin: 'bottom', interval: 200, delay: 300 });
  }, []);

  if (!stats) {
    return <div className="loading">Loading LeetCode Stats...</div>;
  }

  // Now create achievements dynamically after stats is available
  const achievements = [
    {
      title: `${stats.totalSolved} Problems Solved`,
      platform: 'LeetCode',
      description: 'Strengthened DSA skills with consistent problem solving and algorithmic thinking.',
      icon: <SiLeetcode />,
      link: 'https://leetcode.com/u/Abhi-Rathour/',
      stats: `${stats.totalSolved} Problems`,
      color: '#FFA116'
    },
    {
      title: '1550+ Contest Rating',
      platform: 'LeetCode',
      description: 'Achieved through regular contests and competitive programming practice.',
      icon: <FaTrophy />,
      link: 'https://leetcode.com/u/Abhi-Rathour/',
      stats: '1550+ Rating',
      color: '#00EA64'
    },
    {
      title: 'DSA Enthusiast',
      platform: 'GeeksforGeeks',
      description: 'Regularly learning and improving Data Structures and Algorithms concepts.',
      icon: <SiGeeksforgeeks />,
      link: 'https://www.geeksforgeeks.org/user/abhi995e6l/',
      stats: 'Active Learner',
      color: '#2F8D46'
    },
  ];

  return (
    <section className="achievements" id="achievements">
      <h2 className="achievements-title">Coding Platforms</h2>
      <div className="achievements-container">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-header">
              <div className="achievement-icon" style={{ color: achievement.color }}>
                {achievement.icon}
              </div>
              <div className="achievement-platform">
                <h3>{achievement.title}</h3>
                <span className="platform-name">{achievement.platform}</span>
              </div>
            </div>

            <div className="achievement-content">
              <p className="achievement-description">{achievement.description}</p>
              <div className="achievement-stats">
                <span className="stats-badge" style={{ backgroundColor: achievement.color }}>
                  {achievement.stats}
                </span>
              </div>
            </div>

            <div className="achievement-footer">
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="achievement-link"
              >
                View Profile <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
