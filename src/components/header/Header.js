import { useState } from "react";
import MessageBar from "./MessageBar";
import NavBar from "./navbar/NavBar";
import TopBar from "./TopBar";

const Header = () => {
  const [showMessage, setShowMessage] = useState(true);
  const messageDismissedHandler = (flag) => {
    setShowMessage(!flag);
  };

  return (
    <header>
      {showMessage && (
        <MessageBar onMessageDismiss={messageDismissedHandler} />
      )}
      {!showMessage && <TopBar />}
      <NavBar />
    </header>
  );
};

export default Header;
