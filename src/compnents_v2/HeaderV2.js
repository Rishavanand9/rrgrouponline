import React, { useState, useEffect } from "react";
// import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import AccountCircle from "@mui/icons-material/AccountCircle";
import logo1 from "../assets/nobgLogo.png";

function HeaderV2() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // States to control the size and position of the image on scroll
  const [scroll, setScroll] = useState(false);

  // Effect to add event listener for scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY > 1300; // Example threshold
      if (currentScroll !== scroll) {
        setScroll(currentScroll);
      }
    };

    // Add the scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  const handleWhatsAppClick = () => {
    console.log("WhatsApp clicked");
    window.open("https://wa.me/+919640877000");
  };

  const handleFacebookClick = () => {
    console.log("Facebook clicked");
    // Add your Facebook click logic here
  };

  const handleInstagramClick = () => {
    console.log("Instagram clicked");
    window.open("https://www.instagram.com/rr.onlinegroup/");
    // Add your Instagram click logic here
  };

  const handleTelegramClick = () => {
    console.log("Telegram clicked");
    // window.open("https://t.me/bigbroonlinebook");
    // Add your Telegram click logic here
  };

  const buttonPad = isMobile ? 8 : 24;

  // Update the image dimensions and toolbar style based on the scroll position
  const logoStyle = scroll
    ? { height: isMobile ? "60px" : "150px", transition: "height 0.3s" } // Smaller height when scrolled
    : { height: "150px", transition: "height 0.3s" }; // Larger height initially

  const toolbarStyle = scroll
    ? { justifyContent: "space-between" } // Adjust the style when scrolled
    : {
        textAlign: "center",
        display: "inline-flex",
        gap: "1em",
        marginTop: "1em",
      };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100vw",
        minHeight: "60px",
        background: "rgb(0 0 0 / 70%)",
        padding: "1em 0",
        zIndex: 2,
        transition: "all 0.5s ease", // Smooth transition for background and padding
      }}
    >
      {!scroll && (
        <div style={{ textAlign: "center" }}>
          <img src={logo1} alt="logo" style={logoStyle} />
        </div>
      )}
      <div>
        <Toolbar style={toolbarStyle}>
          {scroll && <img src={logo1} alt="logo" style={logoStyle} />}
          <IconButton
            style={{ padding: buttonPad, background: "#6b0303", color: "#fce973" }}
            color="inherit"
            onClick={handleWhatsAppClick}
          >
            <WhatsAppIcon fontSize={isMobile ? "default" : "large"} />
          </IconButton>
          <IconButton
            style={{ padding: buttonPad, background: "#6b0303", color: "#fce973" }}
            color="inherit"
            onClick={handleFacebookClick}
          >
            <FacebookIcon fontSize={isMobile ? "default" : "large"} />
          </IconButton>
          <IconButton
            style={{ padding: buttonPad, background: "#6b0303", color: "#fce973" }}
            color="inherit"
            onClick={handleInstagramClick}
          >
            <InstagramIcon fontSize={isMobile ? "default" : "large"} />
          </IconButton>
          <IconButton
            style={{ padding: buttonPad, background: "#6b0303", color: "#fce973" }}
            color="inherit"
            onClick={handleTelegramClick}
          >
            <TelegramIcon fontSize={isMobile ? "default" : "large"} />
          </IconButton>
          <IconButton
            style={{ padding: buttonPad, background: "#6b0303", color: "#fce973" }}
            color="inherit"
            onClick={() => {}}
          >
            <AccountCircle fontSize={isMobile ? "default" : "large"} />
          </IconButton>
        </Toolbar>
      </div>
    </div>
  );
}

export default HeaderV2;
