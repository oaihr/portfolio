import React from 'react';


const projects = [
  {
    title: 'BalancEat',
    videoUrl: 'https://www.youtube.com/embed/PYNPOB6kbcw',
    subject: '식단/운동/컨디션 기록 등을 제공하는 사용자 건강 관리 서비스 시스템',
    description: '위고비 국내 출시로 높아진 체중 감량 및 건강관리 관심에 맞춰 과학적이고 효율적인 식단 추천 및 판매 웹 사이트를 프론트 부분만 만들어봤습니다.',
    period: '2025.05.28 - 2025.06.13',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Git'],
  },
  {
    title: 'Connectify',
    videoUrl: 'https://www.youtube.com/embed/WPBZFfUsbCA',
    subject: '공공데이터를 활용한 여행지 추천 및 여행 기록 공유 커뮤니티 서비스',
    description: '모두가 누릴 수 있는 여행 을 목표로 이동에 제약이 있는 사람들(고령자, 휠체어 사용자, 임산부 등)을 위한 편의시설 정보 중심의 여행지 추천 및 예약 커뮤니티 플랫폼입니다.',
    period: '2025.07.28 - 2025.08.14',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Java', 'Spring', 'JSP', 'OracleDB', 'Git'],
  },
  {
    title: '목장바로',
    videoUrl: 'https://www.youtube.com/embed/Tb2jnu8HWb8',
    subject: '농산물 가격추이 시세 정보 분석 기반의 농산물 직거래 시스템',
    description: '복잡한 유통 구조를 축소함으로써 소규모 축산 농가와 소상공인을 직접 연결하는 온라인 플랫폼입니다 .',
    period: '2025.07.28 - 2025.08.14',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Java', 'Spring', 'REST API', 'OracleDB', 'Git'],
  },
];

const App = () => {
  return (
    <>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&display=swap');

        body {
          font-family: 'Noto Sans KR', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .page-container {
          min-height: 100vh;
          background-color: #f3f4f6;
          padding: 2rem;
        }

        .content-wrapper {
          max-width: 72rem;
          margin: 0 auto;
        }

        .header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .header-title {
          font-size: 3rem;
          font-weight: 700;
          color: #1f2937;
        }

        .header-subtitle {
          margin-top: 1rem;
          font-size: 1.25rem;
          color: #4b5563;
        }

        .main-content {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .project-card {
          background-color: #fff;
          border-radius: 1.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          padding: 2rem;
          transition: transform 0.3s ease;
        }

        .project-card:hover {
          transform: scale(1.02);
        }

        .project-title {
          font-size: 1.875rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #6366f1;
        }

        .project-details {
          display: grid;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .project-details {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            align-items: flex-start;
          }
        }
        
        .video-container {
          position: relative;
          padding-top: 56.25%; 
          width: 100%;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .info-section {
          display: flex;
          flex-direction: column;
        }

        .info-section h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #374151;
          margin: 0;
        }

        .info-section p {
          margin-top: 0.25rem;
          color: #4b5563;
          line-height: 1.5;
        }
        .info-section .explain {
          margin-top: 20px;
        }
        .tech-list {
          margin-top: 0.5rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          padding: 0.25rem 0.75rem;
          background-color: #e0e7ff;
          color: #4338ca;
          font-size: 0.875rem;
          font-weight: 500;
          border-radius: 9999px;
        }
        `}
      </style>

      <div className="page-container">
        <div className="content-wrapper">
          <header className="header">
            <h3 className="header-title">
              박관호의 포트폴리오
            </h3>
            <p className="header-subtitle">
              {/* 그동안 진행했던 프로젝트들을 소개합니다. */}
            </p>
          </header>

          <main className="main-content">
            {projects.map((project, index) => (
              <section key={index} className="project-card">
                <h2 className="project-title">
                  {project.title}
                </h2>
                <div className="project-details">
                  {/* 프로젝트 시연 영상 */}
                  <div className="video-container">
                    <iframe
                      src={project.videoUrl}
                      title={`${project.title} 시연 영상`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* 프로젝트 상세 정보 */}
                  <div className="info-section">
                    <div className="info-item">
                      <h3>주제</h3>
                      <p>{project.subject}</p>
                    </div>
                    <div className="info-item">
                      <h3>일정</h3>
                      <p>{project.period}</p>
                    </div>
                    <div className="info-item">
                      <h3>사용 기술</h3>
                      <div className="tech-list">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="info-item">
                      <h3 className='explain'>설명</h3>
                      <p>
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
