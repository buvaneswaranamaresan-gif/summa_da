import {useState} from "react";
import "./index.css";

const questions = [
  {
    title: "1. What is Digital Analytics?",
    answer:
      "Digital Analytics means collecting and studying data from websites, apps, ads, and online campaigns to understand how people behave online. It helps businesses know what users are doing, where they are coming from, and what actions they take.",
    example:
      "Example: If I run an online bookstore, I can use digital analytics to see how many people visit the site, which books they view, where they leave, and which books they buy. Based on this, I can improve the homepage, offers, and checkout process."
  },
  {
    title: "2. Marketing Funnel",
    answer:
      "A marketing funnel explains the customer journey from first discovering a business to finally becoming a customer.",
    example:
      "Example: For an online bookstore, a person first sees an Instagram ad. That is awareness. Then they visit the website and check books. That is consideration. Then they add a book to cart and buy it. That is conversion. Later, if they return and buy again, that becomes retention."
  },
  {
    title: "3. How Google Analytics Collects and Processes Data",
    answer:
      "Google Analytics collects data using a small tracking code called a tag. This tag is placed on a website or app. When a user visits the site, the tag sends information like page views, clicks, device details, traffic source, and events to Google Analytics.",
    example:
      "A tag is the actual tracking code. Google Tag Manager is a tool that helps manage many tags without changing website code every time."
  },
  {
    title: "4. Chrome and Internet Explorer: One User or Two?",
    answer:
      "If the same person visits the same website from Google Chrome and Internet Explorer, Google Analytics usually counts them as 2 separate users.",
    example:
      "This happens because each browser stores its own client ID or cookie. So Google Analytics cannot automatically know that both visits are from the same real person."
  },
  {
    title: "5. What is a Session?",
    answer:
      "A session is a group of user interactions on a website within a specific time period. One session can include page views, clicks, scrolling, form submissions, or purchases.",
    example:
      "Example: I open an online bookstore at 10:00 AM, search for books, view 3 books, and add one to cart. All these actions are part of one session. If I leave and come back much later, Google Analytics may start a new session."
  }
];

const funnelSteps = [
  "Awareness",
  "Interest",
  "Consideration",
  "Conversion",
  "Retention"
];

function AssignmentPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [checkedItems, setCheckedItems] = useState([]);

  const toggleChecklist = item => {
    setCheckedItems(prev =>
      prev.includes(item)
        ? prev.filter(each => each !== item)
        : [...prev, item]
    );
  };

  return (
    <div className="page">
      <nav className="navbar">
        <div className="logo">GA Assignment Prep</div>
        <div className="nav-links">
          <a href="#questions">Questions</a>
          <a href="#funnel">Funnel</a>
          <a href="#loom">Loom Checklist</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="tag">Google Analytics Beginner Assignment</p>
          <h1>Understand Digital Analytics Clearly and Speak Confidently</h1>
          <p className="hero-text">
            Use this page to understand the concepts, practice naturally, and
            prepare for your Loom video with confidence.
          </p>
          <div className="hero-buttons">
            <a href="#questions" className="primary-btn">Start Learning</a>
            <a href="#loom" className="secondary-btn">View Checklist</a>
          </div>
        </div>

        <div className="hero-card">
          <h3>Video Focus</h3>
          <p>Speak naturally. Do not read line by line.</p>
          <div className="score-box">
            <span>Clarity</span>
            <strong>50%</strong>
          </div>
          <div className="score-box">
            <span>Confidence</span>
            <strong>50%</strong>
          </div>
        </div>
      </section>

      <section className="section" id="questions">
        <div className="section-heading">
          <p className="tag">Main Answers</p>
          <h2>Assignment Questions Explained</h2>
        </div>

        <div className="questions-layout">
          <div className="question-tabs">
            {questions.map((item, index) => (
              <button
                key={item.title}
                className={activeIndex === index ? "tab active-tab" : "tab"}
                onClick={() => setActiveIndex(index)}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="answer-card">
            <h3>{questions[activeIndex].title}</h3>
            <p>{questions[activeIndex].answer}</p>
            <div className="example-box">
              <strong>Real-life example:</strong>
              <p>{questions[activeIndex].example}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section funnel-section" id="funnel">
        <div className="section-heading">
          <p className="tag">Simple Flow</p>
          <h2>Marketing Funnel Example</h2>
        </div>

        <div className="funnel">
          {funnelSteps.map((step, index) => (
            <div className="funnel-step" key={step}>
              <span>{index + 1}</span>
              <h3>{step}</h3>
            </div>
          ))}
        </div>

        <div className="story-card">
          <h3>Bookstore Example</h3>
          <p>
            A user sees an ad for a bookstore, visits the website, checks book
            categories, adds a book to cart, buys it, and later comes back again
            for another purchase. This complete journey is the marketing funnel.
          </p>
        </div>
      </section>

      <section className="section grid-section">
        <div className="info-card">
          <h3>Tag</h3>
          <p>
            A tag is a small code snippet added to a website to collect user
            interaction data and send it to tools like Google Analytics.
          </p>
        </div>

        <div className="info-card">
          <h3>Tag Manager</h3>
          <p>
            Google Tag Manager helps manage tracking tags from one place without
            editing website code again and again.
          </p>
        </div>

        <div className="info-card">
          <h3>Session</h3>
          <p>
            A session is one visit period where a user performs actions like
            viewing pages, clicking buttons, or buying a product.
          </p>
        </div>
      </section>

      <section className="section" id="loom">
        <div className="section-heading">
          <p className="tag">Before Recording</p>
          <h2>Loom Video Checklist</h2>
        </div>

        <div className="checklist">
          {[
            "Keep face visible",
            "Share full screen",
            "Close all extra tabs and apps",
            "Keep only Loom and questions doc open",
            "Record in one go without pausing",
            "Speak naturally, not like reading",
            "Use examples confidently"
          ].map(item => (
            <label className="check-item" key={item}>
              <input
                type="checkbox"
                checked={checkedItems.includes(item)}
                onChange={() => toggleChecklist(item)}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>
          Practice the concepts in your own words. Be simple, clear, and natural.
        </p>
      </footer>
    </div>
  );
}

export default AssignmentPage;