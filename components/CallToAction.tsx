"use client";
import React from "react";
import styles from "../styles/CallToAction.module.css";

interface CallToActionProps {
  onClick?: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ onClick }) => {
  return (
    <div className={`${styles.container} bg-background`}>
      <h2 className={`${styles.title} mb-16 text-foreground`}>
        Ready to Start Building?
      </h2>
      <p className={`${styles.description} text-foreground mb-16`}>
        Join the ScaffoldRust community today and transform your blockchain
        ideas into reality. Get access to our powerful tools, extensive
        documentation, and supportive developer network.
      </p>
      <button
        className={`${styles.signUpButton} text-background bg-foreground border-border`}
        onClick={onClick}
      >
        Sign Up Now
      </button>
    </div>
  );
};

export default CallToAction;
