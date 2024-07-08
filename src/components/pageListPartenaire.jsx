import React from "react";
import NavBar from "./NavBar&Footer/navBar";
import Footer from "./NavBar&Footer/footer";
import PartnerList from "./OperationPartner/partnerList";

const PageListPartenaire = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        backgroundImage:'url("https://img.freepik.com/free-photo/businessmen-handshake_171337-883.jpg?t=st=1720390024~exp=1720393624~hmac=06f0fd7e259fb40568c7068d00466ed003298f345fce9d1d21e176473104a82b&w=1060")',
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
        <PartnerList />
      </div>
      <Footer />
    </div>
  );
};

export default PageListPartenaire;
