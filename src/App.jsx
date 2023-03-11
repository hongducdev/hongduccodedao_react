import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSite from "./components/LoadingSite";
import Layout from "./layout/Layout";
import { Buffer } from "buffer";
Buffer.from("anything", "base64");

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ChatGPTPage = lazy(() => import("./pages/ChatGPTPage"));

const API_KEY_CHATGPT = process.env.REACT_APP_API_KEY_CHATGPT;

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<LoadingSite />}>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/chat-gpt" element={<ChatGPTPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
