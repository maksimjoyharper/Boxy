import { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useTelegram } from "./hooks/telegram/telegram";

const Layout = lazy(() => import("./pages/Layout/Layout"));
const Game = lazy(() => import("./pages/Game/Game"));
const Home = lazy(() => import("./pages/Home/Home"));
const Leaderboard = lazy(() => import("./pages/Leaderboard/LeaderBoard"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const Friends = lazy(() => import("./pages/Friends/Friends"));
const Tasks = lazy(() => import("./pages/Tasks/Tasks"));

function App() {
  useTelegram().tg.expand();
  useTelegram().tg.disableVerticalSwipes();

  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="game" element={<Game />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="friends" element={<Friends />} />
            <Route path="tasks" element={<Tasks />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
