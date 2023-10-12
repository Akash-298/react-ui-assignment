import styles from "./engagement-section.module.css";

const EngagementSection = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <img className={styles.frameItem} alt="" src="/group-21293.svg" />
      <div className={styles.frameParent}>
        <div className={styles.youShouldHaveMoreEngagemenWrapper}>
          <div
            className={styles.youShouldHave}
          >{`You should have more engagement by 6pm today, try posting then.  📆 `}</div>
        </div>
        <div className={styles.youShouldHaveMoreEngagemenWrapper}>
          <div className={styles.tryOurSeo}>
            Try our SEO optimization tool to increase engagement by 40% 🔥
          </div>
        </div>
      </div>
      <div className={styles.dropdowndefaultselected}>
        <div className={styles.dropshadow1}>
          <div className={styles.shadow1} />
        </div>
        <img
          className={styles.icons16pxarrowGlyphDown}
          alt=""
          src="/icons16pxarrow-glyphdown2.svg"
        />
        <div className={styles.selected}>Zara ventures</div>
      </div>
    </div>
  );
};

export default EngagementSection;
