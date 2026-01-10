import { Routes, Route } from "react-router-dom";
import RootLayout from "../layout/RootLayout.jsx";
import { HomePage } from "@/features/home";
import { AboutPage } from "@/features/about";
import { ServicesPage } from "@/features/services";
import { ProjectsPage } from "@/features/projects";
import { ContactPage } from "@/features/contact";
import { NotFoundPage } from "@/features/not-found";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
