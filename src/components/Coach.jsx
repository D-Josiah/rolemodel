import React from 'react';

const Coach = () => {
  const handleLearnMoreClick = () => {
    window.open('https://www.drbrettdenkin.com/', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="coach max padding">
      <div className="coach-image"></div>
      <div className="coach-content">
        <h2>
          MEET <br />
          <span className="highlighted-text">DR. BRETT</span>
        </h2>
        <p>
          Dr. Brett, founder of Role Model Academy, has 20+ years of experience
          helping individuals achieve clarity, overcome challenges, and succeed in
          life and career. With passion and proven strategies, he’s here to guide
          you to your best self.
        </p>
        <button onClick={handleLearnMoreClick} className="learn-more-button">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Coach;
