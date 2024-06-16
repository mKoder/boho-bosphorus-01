import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.png";
import instagram from "../img/social/instagram.svg";

const Footer = () => {

    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <div className="container">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-8">
                  To inquire a quote for your event please fill out the&nbsp;
                  <a href="https://bonjukbay.plumsail.io/6419b524-873b-4f70-9efc-601e7111a644">Request form</a>
              </div>
              <div className="column is-4 social">
                <a title="Boho Bosphorus instagram" href="https://www.instagram.com/boho_bosphorus">
                  <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
