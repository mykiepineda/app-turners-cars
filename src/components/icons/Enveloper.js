import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Envelope = (props) => {
  return (
    <FontAwesomeIcon
      icon={faEnvelope}
      color={props.color}
      size={props.size}
    />
  );
};

export default Envelope;