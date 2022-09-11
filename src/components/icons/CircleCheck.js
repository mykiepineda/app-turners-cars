import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const CircleCheck = (props) => {
  return (
    <FontAwesomeIcon
      icon={faCircleCheck}
      color={props.color}
      className={props.className}
    />
  );
};

export default CircleCheck;
