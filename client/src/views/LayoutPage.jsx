import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

export default function LayoutPage() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
