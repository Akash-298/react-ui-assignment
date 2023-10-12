import { useMemo } from "react";
import styles from "./property1-s-property2-prima.module.css";

const Property1SProperty2Prima = ({
  buttonText,
  property1SProperty2PrimaPosition,
  property1SProperty2PrimaTop,
  property1SProperty2PrimaLeft,
}) => {
  const property1SProperty2PrimaStyle = useMemo(() => {
    return {
      position: property1SProperty2PrimaPosition,
      top: property1SProperty2PrimaTop,
      left: property1SProperty2PrimaLeft,
    };
  }, [
    property1SProperty2PrimaPosition,
    property1SProperty2PrimaTop,
    property1SProperty2PrimaLeft,
  ]);

  return (
    <div
      className={styles.property1sProperty2prima}
      style={property1SProperty2PrimaStyle}
    >
      <div className={styles.property1sProperty2primaInner}>
        <div className={styles.textWrapper}>
          <div className={styles.text}>{buttonText}</div>
        </div>
      </div>
    </div>
  );
};

export default Property1SProperty2Prima;
