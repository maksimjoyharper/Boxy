import { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

const Layout = lazy(() => import("./pages/Layout/Layout"));
const Game = lazy(() => import("./pages/Game/Game"));
const Home = lazy(() => import("./pages/Home/Home"));
function App() {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="game" element={<Game />} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
