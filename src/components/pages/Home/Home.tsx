import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
