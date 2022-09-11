import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Circle = (props) => {
  return (
    <FontAwesomeIcon
      icon={faCircle}
      color={props.color}
      size={props.size}
    />
  );
};

export default Circle;
