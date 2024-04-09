import { Typography } from "@mui/material";
import "../App.css";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

function InfoV2() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className="body-content">
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: isMobile ? 30 : 50,
          color: "#ece952",
          textShadow: "0px 0px 8px #FFFFFF",
        }}
        className="move-image-animation"
      >
        About Us
      </Typography>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: isMobile ? 20 : 40,
          color: "#fff",
        }}
        className="move-image-animation"
      >
        RR Online's accomplishments in expertise, innovation, and security make
        it a standout performer in the rapidly evolving iGaming and betting
        industry
      </Typography>{" "}
    </div>
  );
}

export default InfoV2;
