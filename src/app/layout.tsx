import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
