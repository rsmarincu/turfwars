import axios from "axios";
import { useEffect, useState, withState } from "react";
import { setCookie } from "../helpers/cookies";
import { Redirect } from "react-router-dom";

const exchangeUrl = "https://www.strava.com/api/v3/oauth/token";

function getCodeFromeQueryString() {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const obj = {};

  for (const key of params.keys()) {
    obj[key] = params.get(key);
  }

  return obj["code"];
}

function exchangeToken(code) {
  const promise = axios.post(exchangeUrl, {
    client_id: "61454",
    client_secret: "ad948348ce6db888d336d9f53f71e8a305ba457b",
    code: code,
    grant_type: "authorization_code",
  });
  return promise;
}

const HandleRedirect = () => {
  const code = getCodeFromeQueryString();
  useEffect(() => {
    exchangeToken(code).then((res) => {
      setCookie("access_token", res.data.access_token, 7);
      setCookie("token_expires_at", res.data.token_expires_at, 7);
      setCookie("refresh_token", res.data.refresh_token, 7);
    });
  }, []);

  return <Redirect to="/home" />;
};

export default HandleRedirect;
