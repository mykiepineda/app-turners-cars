import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const ChevronDown = (props) => {
  return <FontAwesomeIcon icon={faChevronDown} className={props.className} />;
};

export default ChevronDown;
