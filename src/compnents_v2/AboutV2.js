import { Grid, Typography, Button } from "@mui/material";
import about1 from "../assets/about1.webp";
import "../App.css";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import Counter from "./CounterV2";

function AboutV2() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  return (
    <div className="body-content" style={{ marginTop: "20em" }}>
      <Grid container spacing={1}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          {" "}
          <div style={{ display: "grid", gridGap: '1em' }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: isMobile ? 30 : 50,
                color: "#ece952",
                textShadow: "0px 0px 8px #FFFFFF",
              }}
              className="move-image-animation"
            >
            RR Group Online - WIN BIGGER and BETTER
            </Typography>
            <Counter />
            <Typography
              sx={{
                fontWeight: 600,
                fontSize:  isMobile ? 20 : 40,
                color: "#fff",
              }}
              className="move-image-animation"
            >
              RR Group is India's most trusted and vast provider
              for online sports and casino betting platforms
            </Typography>{" "}
            <div style={{ textAlign: "center"}}>
              <Button
                style={{
                  width: "50%",
                  textTransform: "none",
                  background: "rgb(107 3 3)",
                  color: "gold",
                  fontSize: isMobile ? 15 : 30,
                  padding: '2em'
                }}
                className="move-image-animation"
              >
                Get Your Id
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          {" "}
          <img src={about1} style={{ maxWidth: isMobile ? "100%" : "70%" }} alt="abt1" className="move-image-animation"/>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutV2;
