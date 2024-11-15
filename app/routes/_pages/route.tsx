import { Outlet } from "@remix-run/react";

import { Header } from "./header";

export default function App() {
  return (
    <div id="root">
      <Header />
      <Outlet />
    </div>
  );
}
