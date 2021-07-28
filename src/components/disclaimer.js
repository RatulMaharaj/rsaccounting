import React from "react";
import * as styles from "./disclaimer.module.css";
import { useLocalStorage } from "../utils/useLocalstorage";

function Disclaimer() {
  const [accepted, setAccepted] = useLocalStorage("popia", false);

  return (
    <div className={`${styles.wrapper} ${accepted ? styles.hide : ``}`}>
      <div className={styles.text}>
        <strong>
          South Africa’s Protection of Personal Information Act (POPIA) & Cookie
          Consent.
        </strong>
        <p>
          We will not sell, share, or rent your personal information to any
          third party or use your email address for unsolicited mail. Any emails
          sent by us will only be in connection with the provision of our
          services and/or the marketing thereof.
        </p>
      </div>
      <div>
        <a className="button" onClick={(e) => setAccepted(true)}>
          Accept
        </a>
      </div>
    </div>
  );
}

export default Disclaimer;
