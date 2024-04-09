// App.js
import React from "react";
import "./App.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import { Button, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import logo1 from "./assets/nobgLogo.png";

function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const imageSize = isMobile ? 100 : 300; // Adjust the sizes as needed

  const handleWhatsAppClick = () => {
    console.log("WhatsApp clicked");
    window.open("https://wa.me/+919542877000");
  };

  return (
    <div className="body-content">
      <img
        src={logo1}
        alt={`site`}
        style={{
          width: `${imageSize}px`,
          height: "auto",
        }}
      />
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: isMobile ? 20 : 45,
          color: "white",
          textShadow: "0px 0px 8px #FFFFFF",
        }}
        margin={2}
      >
        Contact Us
      </Typography>

      <Button
        style={{
          width: "50%",
          textTransform: "none",
          background: "rgb(107 3 3)",
          color: "gold",
          fontSize: isMobile ? 15 : 30,
          padding: "1em 7em",
        }}
        onClick={handleWhatsAppClick}
        className="move-image-animation"
      >
        <WhatsAppIcon
          fontSize={isMobile ? "default" : "large"}
          sx={{ color: "#fff", fontSize: 30 }}
        />
        +919542877000
      </Button>
      <Typography
        sx={{
          fontWeight: 100,
          fontSize: isMobile ? 10 : 15,
          color: "white",
          marginTop: '2em'
        }}
      >
        © Copyright of RR Online Group
      </Typography>
    </div>
  );
}

export default Contact;
