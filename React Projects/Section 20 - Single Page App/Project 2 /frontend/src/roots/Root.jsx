import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";


export default function Root() {
  //const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      {/*navigation.state === 'loading' ? 'Loading...' : 'Loaded!'*/}
      <Outlet />
    </>
  );
}
