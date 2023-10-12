import { useMemo } from "react";
import styles from "./social-media-section.module.css";

const SocialMediaSection = ({
  arrowTrendingIconTop,
  arrowTrendingIconLeft,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      top: arrowTrendingIconTop,
      left: arrowTrendingIconLeft,
    };
  }, [arrowTrendingIconTop, arrowTrendingIconLeft]);

  return (
    <div className={styles.socialMediaParent} style={frameDivStyle}>
      <div className={styles.socialMedia}>Social media</div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.editParent}>
            <img className={styles.editIcon} alt="" src="/edit.svg" />
            <img
              className={styles.arrowTrendingIcon}
              alt=""
              src="/arrow-trending.svg"
            />
          </div>
          <div className={styles.blogWritngParent}>
            <div className={styles.socialMedia}>Blog writng</div>
            <div
              className={styles.generateTheBest}
            >{`Generate the best blog post to fit your audience with just few clicks of a button `}</div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.basileditOutlineParent}>
            <img
              className={styles.editIcon}
              alt=""
              src="/basileditoutline.svg"
            />
            <img
              className={styles.arrowTrendingIcon}
              alt=""
              src="/arrow-trending.svg"
            />
          </div>
          <div className={styles.blogWritngParent}>
            <div className={styles.socialMedia}>Product description</div>
            <div className={styles.generateTheBest}>
              Instantly generate engaging product descriptions that sell
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.textBulletListSquareEditParent}>
            <img
              className={styles.editIcon}
              alt=""
              src="/text-bullet-list-square-edit.svg"
            />
            <img
              className={styles.arrowTrendingIcon}
              alt=""
              src="/arrow-trending.svg"
            />
          </div>
          <div className={styles.blogWritngParent}>
            <div className={styles.socialMedia}>Article writer</div>
            <div className={styles.generateTheBest}>
              Automatically create unique factual articles at the touch of a
              button
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.editParent}>
            <img className={styles.editIcon} alt="" src="/edit.svg" />
            <img
              className={styles.arrowTrendingIcon}
              alt=""
              src="/arrow-trending.svg"
            />
          </div>
          <div className={styles.blogWritngParent}>
            <div className={styles.socialMedia}>Blog writng</div>
            <div
              className={styles.generateTheBest}
            >{`Generate the best blog post to fit your audience with just few clicks of a button `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSection;
