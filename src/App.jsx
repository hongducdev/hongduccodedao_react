import "./App.scss";
// lazy load
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// components
import { LoadingSite } from "./components";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingSite />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
