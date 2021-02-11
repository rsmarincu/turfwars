import axios from "axios";
import { useEffect, useState, withState, useContext } from "react";
import { setCookie, getCookie } from "../helpers/cookies";
import { Redirect } from "react-router-dom";
import { UserContext } from "./UserContext";

const exchangeUrl = "https://www.strava.com/api/v3/oauth/token";
const athleteUrl = "https://www.strava.com/api/v3/athlete";

function getCodeFromeQueryString() {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const obj = {};

  for (const key of params.keys()) {
    obj[key] = params.get(key);
  }

  return obj["code"];
}

const HandleRedirect = () => {
  const { user, setUser } = useContext(UserContext);
  const code = getCodeFromeQueryString();

  useEffect(() => {
    async function exchangeToken(code) {
      const res = await axios.post(exchangeUrl, {
        client_id: "61454",
        client_secret: "ad948348ce6db888d336d9f53f71e8a305ba457b",
        code: code,
        grant_type: "authorization_code",
      });
      setCookie("access_token", res.data.access_token, 7);
      setCookie("token_expires_at", res.data.token_expires_at, 7);
      setCookie("refresh_token", res.data.refresh_token, 7);
    }
    async function getAthlete() {
      const res = await axios.get(athleteUrl, {
        headers: { Authorization: "Bearer " + getCookie("access_token") },
      });
      setUser({
        id: res.data.id,
        firstname: res.data.firstname,
        lastname: res.data.lastname,
        avatar: res.data.profile_medium,
        nickname: res.data.nickname,
      });
    }
    exchangeToken(code);
    getAthlete();
  }, []);
  return <Redirect to="/home" />;
};

export default HandleRedirect;
