import { Outlet } from "react-router-dom";
import TopNav from "../Components/TopNav";

export default function Root() {
  return (
    <>
<TopNav />
      <Outlet />
    </>
  );
}
