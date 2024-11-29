import { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./components/pages/Home/Home"));
const Game = lazy(() => import("./components/pages/Game/Game"));
function App() {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="game" element={<Game />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
