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
        src={
          logo1
        }
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
        className="WhatsappButton"
        onClick={handleWhatsAppClick}
        style={{ width: isMobile ? "65%" : "25%", borderRadius: "10em" }}
      >
        <WhatsAppIcon
          fontSize={isMobile ? "default" : "large"}
          sx={{ color: "#fff", fontSize: 30 }}
        />
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: isMobile ? 15 : 30,
            color: "white",
            marginLeft: 2,
          }}
        >
          +919542877000
        </Typography>
      </Button>
    </div>
  );
}

export default Contact;
