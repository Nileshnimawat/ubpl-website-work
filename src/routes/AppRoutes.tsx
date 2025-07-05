import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Clients from "../pages/Clients";
import Contact from "../pages/Contact";
import CorporateOverview from "../pages/CorporateOverview";
import Machinery from "../pages/Machinery";
import Directors from "../pages/Directors";
import Focus from "../pages/Focus";
import Profile from "../pages/Profile";
import Vision from "../pages/Vision";
import ManagmentTeams from "../pages/managementTeams";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/corporate-overview" element={<MainLayout><CorporateOverview /></MainLayout>} />
      <Route path="/vision" element={<MainLayout><Vision /></MainLayout>} />
      <Route path="/projects" element={<MainLayout><Projects /></MainLayout>} />
      <Route path="/machinery" element={<MainLayout><Machinery /></MainLayout>} />
      <Route path="/directors" element={<MainLayout><Directors /></MainLayout>} />
      <Route path="/focus" element={<MainLayout><Focus /></MainLayout>} />
      <Route path="/profile" element={<MainLayout><Profile /></MainLayout>} />
      <Route path="/clients" element={<MainLayout><Clients /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
      <Route path="/management-teams" element={<MainLayout><ManagmentTeams /></MainLayout>} />
    </Routes>
  );
};

export default AppRoutes;
