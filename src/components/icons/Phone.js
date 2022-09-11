import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Phone = (props) => {
  return (
    <FontAwesomeIcon
      icon={faPhone}
      color={props.color}
      className={props.className}
    />
  );
};

export default Phone;
