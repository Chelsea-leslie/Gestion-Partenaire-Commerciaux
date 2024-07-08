import React from "react";
import NavBar from "../components/NavBar&Footer/navBar";
import Footer from "../components/NavBar&Footer/footer";
import ProjectEdit from "../components/OperationProject/projectEdit";

const PageProjectEdit = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundImage:'url("https://img.freepik.com/free-photo/african-man-black-suit-big-tv-screen-guy-shows-presentation_1157-48542.jpg?t=st=1720453956~exp=1720457556~hmac=8f169d9f3828d89c8f6493da430dbe5aed6a3f63832aed27fe76c77d3146543d&w=1060")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden",
      }}
    >
      <NavBar />
      <div style={{ paddingBottom: "4rem" }}>
        {" "}
        {/* Ensure space for the footer */}
        <ProjectEdit />
      </div>
      <Footer />
    </div>
  );
};

export default PageProjectEdit;
