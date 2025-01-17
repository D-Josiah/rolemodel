import React from "react";
import Header from "../components/Header";


const Home = () => {
  return (
    <>
      <Header />
      <main className="home max">
        <section className="hero max padding">
          <div className="hero-text">
            <h1>
              Unleash Your Inner Champion:
              <br />
              Join the <span className="orange-text">Role Model Academy </span>
            </h1>
            <h2> Elevate Your Game. Conquer Your Limits.</h2>
            <button className="hero-btn">JOIN US ON TELEGRAM</button>
            <div className="proposition-wrap">
              <div className="proposition">
                <img src="/assets/brain-icon.png" alt="brain icon"></img>
                <h3>Develop unshakeable mental fortitude.</h3>
              </div>
              <div className="proposition">
                <img src="/assets/meditate-icon.png" alt="meditate icon"></img>
                <h3>Master your mind and body.</h3>
              </div>
              <div className="proposition">
                <img src="/assets/leadership-icon.png" alt="leadership icon"></img>
                <h3>Unlock your leadership potential.</h3>
              </div>
              <div className="proposition">
                <img src="/assets/support-icon.png" alt="support icon"></img>
                <h3>Build a support system that fuels your ambition.</h3>
              </div>
            </div>
          </div>
          <img
            src="/assets/hero-image.png"
            alt="hero image showing target audience such as athletes, students, business owners"
            className="hero-image"
          />
        </section>
        <section className="benefits max padding spacer" id="benefits">
          <div className="header-benefits">
            <h2>Why Join Role Model Academy?</h2>
            <img src="/assets/logo.png" alt="logo"></img>
          </div>
          <div className="benefits-wrap">
            <div className="benefit">
              <img src="/assets/insights-icon.png" alt="insights icon"></img>
              <h3>Access to Expert Insights</h3>
              <p>Learn proven strategies from top leaders and performance coaches.</p>
            </div>
            <div className="benefit">
              <img src="/assets/community-icon.png" alt="community icon"></img>
              <h3>Supportive Community</h3>
              <p>Connect with like-minded individuals for growth and support.</p>
            </div>
            <div className="benefit">
              <img src="/assets/challenges-icon.png" alt="challenges icon"></img>
              <h3>Interactive Challenges to Expert Insights</h3>
              <p>Strengthen resilience with engaging growth-focused challenges.</p>
            </div>
            <div className="benefit">
              <img src="/assets/learning-icon.png" alt="learning icon"></img>
              <h3>Flexible Learning</h3>
              <p>Enjoy workshops, webinars, and on-demand content anytime.</p>
            </div>
          </div>
        </section>
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
            <button>Learn More</button>
          </div>
        </section>
        <section className="testimonials max padding spacer" id="testimonials">
          <h2>What Makes Us Different?</h2>
          <h2>Hear It From Them!</h2>
          <div className="testimonial-wrap">
            <div className="testimonial side gray-bg">
              <img src="/assets/quote-icon.png" alt="quote icon"></img>
              <p className="name">JM R.</p>
              <p className="creds">entrepreneur</p>
              <p className="comment">
                Dr. Brett has a unique approach to life that has inspired me to live life more
                abundantly. The freedom Brett has created in his own life is a testimony in and of
                itself. The possibilities are infinite.
              </p>
            </div>

            <div className="testimonial gray-bg">
              <img src="/assets/quote-icon.png" alt="quote icon"></img>
              <p className="name">Corinne T. </p>
              <p className="creds">award-winning author, spokesperson, consultant</p>
              <p className="comment">
                Relocating and growing my business was overwhelming, but Dr. Brett’s advice saved
                time and money. His feedback and creativity helped me refocus, achieving progress in
                under a month.
              </p>
            </div>

            <div className="testimonial side gray-bg">
              <img src="/assets/quote-icon.png" alt="quote icon"></img>
              <p className="name">Bob T.</p>
              <p className="creds">entrepreneur</p>
              <p className="comment">
                Dr. Brett combines business coaching and psychology to eliminate distractions, drive
                results, and improve all aspects of life effectively.
              </p>
            </div>
          </div>
          <button
            onClick={() => window.open("https://www.drbrettdenkin.com/testimonials/", "_blank")}
          >
            MORE
          </button>
        </section>
      </main>
    </>
  );
};

export default Home;
