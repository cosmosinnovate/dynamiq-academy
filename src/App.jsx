import learningTime from './assets/learning-time.svg';
import learningTime2 from './assets/learning-time-2.svg'
import standingHuman from './assets/standing.svg'
// import image1 from './assets/azure-logo.png';
// import image2 from './assets/aws-logo.png';
// import image3 from './assets/google-logo.png';



export default function App() {

  return (
    <div className="container">
      <div className="main">
        <div className="logo">Dynamic academy</div>
        <div className="hero">
          <p className="hero-header">The Elite diverse tech talent pipeline. Solved</p>
          <div className="box">
            <img className="humaaans-standing" alt="Humaaans standing" src={standingHuman} />
            <div className="call-to-action-box">
              <p className="text-wrapper-10">Join the esteemed Site Reliability Engineering Training Program today!</p>
              <button>
                <div className="text-wrapper-11">Join</div>
              </button>
            </div>
          </div>
        </div>

        <div className="sign-ups">
          <div className="text-wrapper">130+ Sign ups</div>
        </div>

        <div className="left-middle-section">
          <p className="text-wrapper">
            We provide comprehensive SRE training programs that equip you with the skills and knowledge needed to excel
            in an SRE role, ensuring you are job-ready.
          </p>
        </div>

        <section className="why-enroll">
          <h1 className="header-h1">Why should you care?</h1>
          <div className="right-middle-section">
            <p className="text-wrapper">
              Our SRE training programs are led by renowned experts from Amazon, JPM, and other top organizations.
            </p>
          </div>
        </section>


        <section className="tech-talent-section">
          <div className="header">Tech talents</div>
          <div className="tech-talent">
            <p className="talent-p-wrapper">
              <span className="text-wrapper">
                Are you interested in getting your next dream tech role?
                <br />
              </span>
              <span className="text-wrapper">
                <br />
              </span>
              <span className="text-wrapper">
                STOP THIS:
                <br />
              </span>
              <span className="text-wrapper">
                <br />
                Stop being uncertain about how to break into elite tech jobs
                <br />
                Stop struggling to get your next senior level role
                <br />
                Stop being compensated less than what your elite skills are worth
                <br />
                Stop fruitless job searches. Get recruiters and hiring managers running to you
                <br />
                Stop getting dropped out of the interview process
                <br />
                Stop feeling unwelcome or stop tolerating bad teams and employers
                <br />
                <br />
              </span>
              <span className="text-wrapper">
                ACHIEVE THIS:
                <br />
              </span>
              <span className="text-wrapper">
                <br />
                Go where you are welcomed, celebrated, appreciated, and compensated.
                <br />
                HINT: The best chance to achieve this is often to change jobs
                <br />
                Get the exact skills which will have recruiters and hiring managers salivating
                <br />
                Get the public portfolio and social media credibility to bring recruiters and hiring managers running to
                you.
                <br />
                Get the hand’s-on experience and interview skills to ace your interviews
                <br />
                Get mentorship and salary negotiation guidance to avoid the minority penalty and to earn every bit of what
                your elite skills are worth.
              </span>
            </p>
            <img className="croods-party-time" alt="Croods party time" src={learningTime} />
          </div>
        </section>

        <section className='tech-recruiter-section'>
          <div className="header">Tech recruiters</div>
          <div className="tech-recruiter">
            <img className="croods-sitting-in" alt="Croods sitting in" src={learningTime2} />

            <p className="text-p-wrapper">
              <span className="text-wrapper">
                <br />
              </span>

              <span className="span">
                Are you interested in hiring proven, elite diverse tech talent?
                <br />
              </span>
              <span className="text-wrapper">
                <br />
              </span>
              <span className="text-wrapper">
                STOP THIS:
                <br />
              </span>
              <span className="text-wrapper">
                <br />
                Stop guessing were to find elite diverse tech talent
                <br />
                Stop losing 100s of hours and $10,000s on non-ideal candidates
                <br />
                Stop failing to meet your DEI and elite talent recruitment objectives
                <br />
                <br />
              </span>

              <span className="text-wrapper">
                ACHIEVE THIS:
                <br />
              </span>

              <span className="text-wrapper">
                <br />
                Get access to interested elite tech talent concentrated in one place…fast
                <br />
                Save 100s of hours and $10,000s by finding proven elite talent and publicly demonstrated credibility…fast
                <br />
                Meet BOTH your DEI and elite talent recruitment objectives…fast
              </span>

            </p>
          </div>
        </section>

        {/* <div className="global-brands">
          <p className="header">Trusted by thousands of top global brands</p>
          <div className="logos">
            <img className="image" alt="Image" src={image1} />
            <img className="image" alt="Image" src={image2} />
            <img className="image" alt="Image" src={image3} />
          </div>
        </div> */}

        <div className="footer">
          <p>Copyright © 2023 Dynamic Academy org. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
