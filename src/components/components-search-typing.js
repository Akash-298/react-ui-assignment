import { useMemo } from "react";
import styles from "./components-search-typing.module.css";

const ComponentsSearchTyping = ({
  iconImageUrl,
  searchPlaceholderText,
  templateId,
  componentsSearchTypingPosition,
  componentsSearchTypingTop,
  componentsSearchTypingLeft,
  textIconWidth,
}) => {
  const componentsSearchTypingStyle = useMemo(() => {
    return {
      position: componentsSearchTypingPosition,
      top: componentsSearchTypingTop,
      left: componentsSearchTypingLeft,
    };
  }, [
    componentsSearchTypingPosition,
    componentsSearchTypingTop,
    componentsSearchTypingLeft,
  ]);

  const textIconStyle = useMemo(() => {
    return {
      width: textIconWidth,
    };
  }, [textIconWidth]);

  return (
    <div
      className={styles.componentssearchtyping}
      style={componentsSearchTypingStyle}
    >
      <div className={styles.dropshadow1}>
        <div className={styles.shadow1} />
      </div>
      <div className={styles.textIcon} style={textIconStyle}>
        <img className={styles.icons24pxsearch} alt="" src={iconImageUrl} />
        <div className={styles.enterACity}>{searchPlaceholderText}</div>
        <div className={styles.cursor} />
      </div>
      <img
        className={styles.icons16pxremoveRound}
        alt=""
        src="/icons16pxremove-round1.svg"
      />
      <img className={styles.filterSvgrepoCom1Icon} alt="" src={templateId} />
    </div>
  );
};

export default ComponentsSearchTyping;
