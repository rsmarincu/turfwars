import runningwide from "../assets/runningwide.jpg";
import { auth } from "./Firebase";
import axios from "axios";

const authUrl = new URL("https://www.strava.com/oauth/authorize");

authUrl.searchParams.append("client_id", "61454");
authUrl.searchParams.append("redirect_uri", "http://localhost:3000/redirect");
authUrl.searchParams.append("response_type", "code");
authUrl.searchParams.append("scope", "activity:read_all");

const LoginScreen = () => {
  return (
    <section className="section">
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="card-content">
              <h1 className="title is-2">Login with your Strava account</h1>
              <a href={authUrl.href} className="button is-medium">
                Login
              </a>
            </div>
            <div className="card is-vecenterd">
              <div className="card-image">
                <figure className="image">
                  <img src={runningwide} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default LoginScreen;
