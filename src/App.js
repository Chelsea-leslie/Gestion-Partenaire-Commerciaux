import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import PartnerManagement from "./components/partnerManagment";
import ProjectManagement from "./components/projectManagment";
import Reports from "./components/reports";
import PagePartnerForm from "./components/pagePartnerForm";
import PageProjectForm from "./components/pageProjectForm";
import PageListPartenaire from "./components/pageListPartenaire";
import PageListProject from "./components/pageListProjet";
import PagePartnerEdit from "./components/PageEditPartner";
import PageProjectEdit from "./components/PageEditProject";
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
        <Route path="/add-partner" element={<PagePartnerForm />} />
        {/* Route pour ajouter projets */}
        <Route path="/add-project" element={<PageProjectForm />} />
        {/* Route pour modifier partenaire */}
        <Route path="/edit-partner/:id" element={<PagePartnerEdit />} />
        {/* Route pour lister partenaires */}
        <Route path="/Listpartners" element={<PageListPartenaire />} />
        {/* Route pour modifier projects */}
        <Route path="/edit-project/:id" element={<PageProjectEdit />} />
        {/* Route pour lister projets */}
        <Route path="/Listproject" element={<PageListProject />} />
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
