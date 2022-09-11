import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const XMark = (props) => {
  return <FontAwesomeIcon icon={faXmark} color={props.color} size={props.size}/>;
};

export default XMark;
