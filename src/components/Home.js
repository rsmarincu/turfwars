import axios from "axios";
import { useEffect, useState, withState } from "react";
import { getCookie } from "../helpers/cookies";

const athleteUrl = "https://www.strava.com/api/v3/athlete";

function User(id, firstname, lastname, avatar, username) {
  this.id = id;
  this.firstname = firstname;
  this.lastname = lastname;
  this.avatar = avatar;
  this.username = username;
}

function getAthlete() {
  const promise = axios.get(athleteUrl, {
    headers: { Authorization: "Bearer " + getCookie("access_token") },
  });
  return promise;
}

const Home = () => {
  const [user, setUser] = useState("");

  getAthlete().then((res) => {
    console.log(res.data);
    setUser({
      id: res.data.id,
      firsname: res.data.firstname,
      lastname: res.data.lastname,
      avatar: res.data.profile_medium,
      nickname: res.data.nickname,
    });
  });

  return <h1 className="is-title 3">{user.firstname}</h1>;
};

export default Home;
