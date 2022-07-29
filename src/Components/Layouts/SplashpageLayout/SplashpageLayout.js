import React, { useState } from "react";
import NavbarSplashpage from "../../design/Navbar/NavbarSplashpage/NavbarSplashpage";
import "./SplashpageLayout.css";
import splashpageBackgroundImage from "./splashpage_background_image6.png";
import Modal from "../../design/Modal/Modal";
import Panel from "../../design/Panel/Panel";
import Card from "react-bootstrap/Card";
import SignUp from "../../SignUp/SignUp";
import Login from "../../Login/Login";
import ForgotPassword from "../../Login/ForgotPassword/ForgotPassword";
import SplashpageContactForm from "./SplashpageContact/SplashpageContactForm";
import TeamPage from "./SplashpageTeam/TeamPage/TeamPage.js";
import clsx from "clsx";

export default function SplashpageLayout() {
  const [showSplashPageModal, setShowSplashPageModal] = useState(false);
  const [currentBio, setCurrentBio] = useState({});

  const [modalLabel, setModalLabel] = useState("Loading");
  const [modalContents, setModalContents] = useState(<></>);
  const [panelView, setPanelView] = useState("");

  const handleCloseSplashPageModal = () => setShowSplashPageModal(false);
  const handleSwitchSplashPageModal = (modalLabelInput) => {
    console.log("handleSwitchSplashPageModal", modalLabelInput);
    setModalLabel(modalLabelInput);
    if (modalLabelInput === "Sign Up") {
      setModalContents(
        <Card>
          <Card.Body>
            <SignUp
              onCancel={handleCloseSplashPageModal}
              toggleModalContents={handleSwitchSplashPageModal}
            />
          </Card.Body>
        </Card>
      );
      setShowSplashPageModal(true);
    } else if (modalLabelInput === "Log In") {
      setModalContents(
        <Card>
          <Card.Body>
            <Login
              onSubmit={handleCloseSplashPageModal}
              onCancel={handleCloseSplashPageModal}
              toggleModalContents={handleSwitchSplashPageModal}
              formType="standard"
            />
          </Card.Body>
        </Card>
      );
    } else if (modalLabelInput === "Forgot Password") {
      setModalContents(
        <Card>
          <Card.Body>
            <ForgotPassword
              onSubmit={handleCloseSplashPageModal}
              onCancel={handleCloseSplashPageModal}
              toggleModalContents={handleSwitchSplashPageModal}
            />
          </Card.Body>
        </Card>
      );
    }
    setShowSplashPageModal(true);
  };

  const handleSwitchSplashPagePanel = () => {
    if (panelView === "Our Team") {
      return (
        <Panel
          hide={() => setPanelView("")}
          show={true}
          panelPalette={"bluePanel"}
          currentBio={currentBio}
          setCurrentBio={setCurrentBio}
        >
          <TeamPage currentBio={currentBio} setCurrentBio={setCurrentBio} />
        </Panel>
      );
    } else if (panelView === "Try It Out") {
      return (
        <Panel
          hide={() => {
            setCurrentBio({});
            setPanelView("");
          }}
          show={true}
          panelPalette={"pinkPanel"}
        >
          <div>Try It Out</div>
        </Panel>
      );
    } else if (panelView === "Contact") {
      return (
        <Panel
          hide={() => setPanelView("")}
          show={true}
          panelPalette={"tealPanel"}
        >
          <Card>
            <Card.Body>
              <SplashpageContactForm setPanelView={setPanelView} />
            </Card.Body>
          </Card>
        </Panel>
      );
    }
  };

  return (
    <main
      className={clsx(
        "splashpage-layout",
        panelView && "splashpage-layout__noscroll"
      )}
    >
      <div className="splashpage-layout__navbar-container">
        <NavbarSplashpage
          toggleModalContents={handleSwitchSplashPageModal}
          togglePanelContents={setPanelView}
        />
      </div>
      <div className="splashpage-layout__content">
        <img
          src={splashpageBackgroundImage}
          alt="Splashpage graphics"
          className="splashpage-layout__background-image"
        />
        <Modal
          hide={handleCloseSplashPageModal}
          show={showSplashPageModal}
          heading={modalLabel}
          splashpageForm={true}
        >
          {modalContents}
        </Modal>
        {handleSwitchSplashPagePanel()}
      </div>
    </main>
  );
}
