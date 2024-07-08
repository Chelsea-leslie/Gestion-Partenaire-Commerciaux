import React from "react";
import NavBar from "./NavBar&Footer/navBar";
import Footer from "./NavBar&Footer/footer";
import ProjectForm from "./formulaires/projectform";

const PageProjectForm = ({
  title,
  description,
  amount,
  charges,
  startDate,
  endDate,
  setTitle,
  setDescription,
  setAmount,
  setCharges,
  setStartDate,
  setEndDate,
  selectedPartners,
  setSelectedPartners,
  handleSubmit,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundImage:'url("https://img.freepik.com/free-photo/successful-happy-business-team_53876-74892.jpg?t=st=1720309507~exp=1720313107~hmac=4f5b89e516b73fdd0fdb7e18ebb4ea046488495a03e70fffbbc8e42acd82e644&w=1380")',
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
        <ProjectForm
          title={title}
          description={description}
          amount={amount}
          charges={charges}
          startDate={startDate}
          endDate={endDate}
          setTitle={setTitle}
          setDescription={setDescription}
          setAmount={setAmount}
          setCharges={setCharges}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          selectedPartners={selectedPartners}
          setSelectedPartners={setSelectedPartners}
          handleSubmit={handleSubmit}
        />
      </div>
      <Footer />
    </div>
  );
};

export default PageProjectForm;
