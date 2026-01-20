// src/components/Landingpage/Landingpage.jsx - CORRECTED

import React from "react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Landingpage.css";
import background from "../Assets/bg.png";
import mainLogo from "../Assets/logo.png";
import loaderVideo from "../Assets/loadingvideo.mp4";

export default function Landingpage() {
  const videoRef = useRef(null);
  const [showMain, setShowMain] = useState(
    // Immediately show main content if the loader has already played
    () => sessionStorage.getItem("loaderPlayed") === "true"
  );

  const [isLandscape, setIsLandscape] = useState(
    window.matchMedia("(orientation: landscape)").matches
  );
  const navigate = useNavigate();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: landscape)");
    const handleOrientationChange = (e) => setIsLandscape(e.matches);
    mediaQuery.addEventListener("change", handleOrientationChange);

    return () => mediaQuery.removeEventListener("change", handleOrientationChange);
  }, []);

  useEffect(() => {
    // If main content is already showing, or if it's portrait, do nothing.
    if (showMain || !isLandscape) return;

    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay was prevented:", error);
      });
      videoRef.current.onended = () => {
        setShowMain(true);
        sessionStorage.setItem("loaderPlayed", "true");
      };
    }
  }, [isLandscape, showMain]);

  const skipVideo = () => {
    setShowMain(true);
    sessionStorage.setItem("loaderPlayed", "true");
  };

  return (
    <>
      {/* Loader & Portrait Message: This entire block disappears when showMain is true */}
      {!showMain && (
        <div id="loader">
          {isLandscape ? (
            <>
              <video ref={videoRef} autoPlay muted playsInline>
                <source src={loaderVideo} type="video/mp4" />
              </video>
              <button id="skip-btn" onClick={skipVideo}>Skip</button>
            </>
          ) : (
            <div id="portrait-message">
              <svg className="rotate-icon" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 4v6h-6" /><path d="M1 20v-6h6" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" /><path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14" />
              </svg>
              <h1>Please rotate your device to play the introduction</h1>
            </div>
          )}
        </div>
      )}

      {/* Main Content: This entire block renders only when showMain is true */}
      {showMain && (
        <div id="main-content" style={{ backgroundImage: `url(${background})` }}>
          <section className="content">
            <img src={mainLogo} alt="Main Logo" className="main-logo" />
            <div className="overlay-text">
              <h1 className="tagline">CREATING FUTURE ENDEAVOURS</h1>
              <p className="date">9-10 FEBRUARY 2026</p>
              <button
                className="cta-btn"
                onClick={() => navigate("/events")}
              >
                EXPLORE OUR EVENTS
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}