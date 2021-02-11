import { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import { setCookie, getCookie } from "../helpers/cookies";

import axios from "axios";
import Navbar from "./Navbar";
import Map from "./Map";

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <Navbar />
      <Map />
    </div>
  );
};

export default Home;
