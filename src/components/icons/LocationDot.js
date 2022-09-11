import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const LocationDot = (props) => {
  return (
    <FontAwesomeIcon
      icon={faLocationDot}
      color={props.color}
      size={props.size}
    />
  );
};

export default LocationDot;