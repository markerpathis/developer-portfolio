import React from "react";
import logoGitHub from "../../assets/logoGitHub.png";
import logoLinkedIn from "../../assets/logoLinkedIn.png";

const styles = {
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "50px",
  },
  icons: {
    paddingLeft: "15px",
  },
};

export default function Footer() {
  return (
    <div style={styles.footer}>
      <div>
        <a href="https://github.com/markerpathis" target="_blank" rel="noreferrer" style={styles.icons}>
          <img src={logoGitHub} alt="GitHub Logo" height="50px" />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/parker-mathis/" target="_blank" rel="noreferrer" style={styles.icons}>
          <img src={logoLinkedIn} alt="LinkedIn Logo" height="50px" />
        </a>
      </div>
    </div>
  );
}
