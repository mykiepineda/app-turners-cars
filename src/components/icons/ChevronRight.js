import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ChevronRight = (props) => {
  return <FontAwesomeIcon icon={faChevronRight} color={props.color} size={props.size} />;
};

export default ChevronRight;
