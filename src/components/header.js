import Property1SProperty2Prima from "./property1-s-property2-prima";
import ComponentsSearchTyping from "./components-search-typing";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.buttonParent}>
      <Property1SProperty2Prima
        buttonText="Create Content"
        property1SProperty2PrimaPosition="absolute"
        property1SProperty2PrimaTop="calc(50% - 28px)"
        property1SProperty2PrimaLeft="calc(50% + 206.5px)"
      />
      <div className={styles.akarIconscoinParent}>
        <img className={styles.akarIconscoin} alt="" src="/akariconscoin.svg" />
        <div className={styles.div}>20</div>
      </div>
      <ComponentsSearchTyping
        iconImageUrl="/icons24pxsearch2.svg"
        searchPlaceholderText="Search for templates, projects, etc"
        templateId="/filtersvgrepocom-11.svg"
        componentsSearchTypingPosition="absolute"
        componentsSearchTypingTop="1.06rem"
        componentsSearchTypingLeft="1.13rem"
        textIconWidth="16.81rem"
      />
    </div>
  );
};

export default Header;
