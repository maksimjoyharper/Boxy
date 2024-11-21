import { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./components/pages/Home/Home"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
