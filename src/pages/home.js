import EngagementSection from "../components/engagement-section";
import SocialMediaFormContainer from "../components/social-media-form-container";
import Header from "../components/header";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <img className={styles.homeChild} alt="" src="/vector-1583.svg" />
      <div className={styles.rightTopNav}>
        <div className={styles.calenderParent}>
          <div className={styles.calender}>
            <img className={styles.calendarIcon} alt="" src="/calendar.svg" />
          </div>
          <div className={styles.notification}>
            <img className={styles.calendarIcon} alt="" src="/alert.svg" />
          </div>
          <div className={styles.profile}>
            <div className={styles.componentsavatarroundRectan}>
              <img
                className={styles.componentsavatarroundRectanIcon}
                alt=""
                src="/componentsavatarround-rectangle--s@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mainBoardfull}>
        <EngagementSection />
        <SocialMediaFormContainer />
        <div className={styles.heyJames}>{`Hey James! `}</div>
        <div className={styles.letsCreateSomething}>
          Lets create something awesome today ✨💫
        </div>
        <div className={styles.mostPopularToolsParent}>
          <div className={styles.mostPopularTools}>Most Popular Tools</div>
          <div className={styles.exploreTheTrending}>
            Explore the trending tools to create your copies fast
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.buttonInner}>
            <div className={styles.textWrapper}>
              <div className={styles.text}>Start Creating</div>
            </div>
          </div>
        </div>
      </div>
      <Header />
      <div className={styles.sideNav}>
        <div className={styles.frameParent}>
          <div className={styles.logoParent}>
            <div className={styles.logo}>
              <div className={styles.logo1}>
                <div className={styles.logo2}>
                  <div className={styles.groupParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/group-71.svg"
                    />
                    <div className={styles.retinkParent}>
                      <img
                        className={styles.retinkIcon}
                        alt=""
                        src="/retink.svg"
                      />
                      <div className={styles.groupChild} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.homeParent}>
              <div className={styles.home1}>
                <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                <div className={styles.message}>Home</div>
              </div>
              <div className={styles.template}>
                <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
                <div className={styles.message}>Home</div>
              </div>
              <div className={styles.myContent}>
                <img
                  className={styles.contentViewGallery}
                  alt=""
                  src="/content-view-gallery1.svg"
                />
                <div className={styles.message}>My Content</div>
              </div>
              <div className={styles.aiInsights}>
                <img
                  className={styles.dataTrendingIcon}
                  alt=""
                  src="/data-trending.svg"
                />
                <div className={styles.message}>AI Insights</div>
              </div>
              <div className={styles.messages}>
                <img
                  className={styles.contentViewGallery}
                  alt=""
                  src="/mail.svg"
                />
                <div className={styles.message}>Message</div>
              </div>
            </div>
          </div>
          <div className={styles.homeParent}>
            <div className={styles.settings}>
              <img
                className={styles.contentViewGallery}
                alt=""
                src="/settings1.svg"
              />
              <div className={styles.message}>Settings</div>
            </div>
            <div className={styles.mdilogoutVariant}>
              <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
              <div className={styles.message}>Log out</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
