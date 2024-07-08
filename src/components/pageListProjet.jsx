import React from "react";
import NavBar from "./NavBar&Footer/navBar";
import Footer from "./NavBar&Footer/footer";
import ProjectList from "./OperationProject/projectList";

const PageListProject = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        backgroundImage:'url("https://img.freepik.com/free-photo/african-man-black-suit-big-tv-screen-guy-shows-presentation_1157-48542.jpg?t=st=1720426601~exp=1720430201~hmac=afb3e070f385c23def227215fe1a21a0f33505118635da02f978b4efae167683&w=1060")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden",
      }}
    >
      <NavBar />
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProjectList />
      </div>
      <Footer />
    </div>
  );
};

export default PageListProject;
