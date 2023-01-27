import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSite from "./components/LoadingSite";
import Layout from "./layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<LoadingSite />}>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
