import SocialMediaSection from "./social-media-section";
import styles from "./social-media-form-container.module.css";

const SocialMediaFormContainer = () => {
  return (
    <div className={styles.forYouBoard}>
      <div className={styles.forYouBoardChild} />
      <SocialMediaSection />
      <SocialMediaSection
        arrowTrendingIconTop="16.94rem"
        arrowTrendingIconLeft="0.19rem"
      />
    </div>
  );
};

export default SocialMediaFormContainer;
