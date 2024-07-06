import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import PartnerList from "./components/OperationPartner/partnerList";
import PartnerEdit from "./components/OperationPartner/partnerEdit";
import ProjectEdit from "./components/OperationProject/projectEdit";
import ProjectList from "./components/OperationProject/projectList";
import PartnerForm from "./components/formulaires/partnerform";
import ProjectForm from "./components/formulaires/projectform"
import PartnerManagement from "./components/partnerManagment";
import ProjectManagement from "./components/projectManagment";
import Reports from "./components/reports";
// import Setting from "./components/setting";




function App() {
  return (
    <Router>
      <Routes>
        {/* Route pour la page de connexion */}
        <Route path="/" element={<Login />} />
        {/* Route pour le tableau de bord */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Route pour ajouter partenaire */}
        <Route path="/add-partner" element={<PartnerForm />} />
        {/* Route pour ajouter projets */}
        <Route path="/add-project" element={<ProjectForm />} />
        {/* Route pour modifier partenaire */}
        <Route path="/edit-partner/:id" element={<PartnerEdit />} />
        {/* Route pour lister partenaires */}
        <Route path="/Listpartners" element={<PartnerList />} />
        {/* Route pour modifier projects */}
        <Route path="/edit-project/:id" element={<ProjectEdit />} />
        {/* Route pour lister projets */}
        <Route path="/Listproject" element={<ProjectList />} />
        {/* Route pour le managments des partenaires */}
        <Route path="/partners" element={<PartnerManagement />} />
        {/* Route pour le management des projets */}
        <Route path="/projects" element={<ProjectManagement />} />
        {/* Route pour les rapports */}
        <Route path="/reports" element={<Reports />} />
        {/* Route pour les parametres
        <Route path="settings" element={<Setting />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
