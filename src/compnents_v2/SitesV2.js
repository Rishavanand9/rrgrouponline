import { Typography, Grid, Divider } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import d247Logo from "../assets/d247logo.png";
import al777 from "../assets/al777.png";

import casino from "../assets/casino.png";
import board from "../assets/board.png";
import cricket from "../assets/cricket.png";
import football from "../assets/football.png";


const sites = [
  {
    img: d247Logo,
    url: "https://www.d247.com/",
  },
  {
    img: al777,
    url: "https://allpanel777.com/",
  },
  {
    img: "https://dzm0kbaskt4pv.cloudfront.net/v17/static/themes/allpaanel.com/front/logo.png",
    url: "https://www.allpaanel.com/home",
  },
  // {
  //   img: "https://www.247betbook.com/d/betbook2472af08e475c66a982373f86f5eaa6a031.svg",
  //   url: "https://www.247betbook.com/d/index.html#/home",
  // },
  // {
  //   img: "https://www.lotusbook247.com/m/assets/img/logo.svg",
  //   url: "https://lotusbook247.com/",
  // },
  {
    img: "https://d3.the100exch.com/assets/images/lotus-the100-logo.png",
    url: "https://d3.the100exch.com/",
  },
  // {
  //   img: "https://lotus365.win/assets/img/lotus365/logo.png",
  //   url: "https://lotus365.win/home",
  // },
  // {
  //   img: "https://unicon365.com/assets/images/unicon365.com/logo.png",
  //   url: "https://unicon365.com/",
  // },
  // {
  //   img: "https://assets-bucket.b-cdn.net/magic-win-biz/cms-content/assets/images/icons/455.png",
  //   url: "https://magicwin.biz/dashboard?selected=main",
  // },
];

const sites2 = [
  {
    img: cricket,
    url: "https://www.d247.com/",
  },
  {
    img: football,
    url: "https://allpanel777.com/",
  },
  {
    img: board,
    url: "https://www.allpaanel.com/home",
  },
  // {
  //   img: baskketball,
  //   url: "https://www.247betbook.com/d/index.html#/home",
  // },
  {
    img: casino,
    url: "https://lotusbook247.games/",
  },
];

function SitesV2() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSiteClick = (e, url) => {
    window.open(url);
  };
  const imageSize = isMobile ? 200 : 300; // Adjust the sizes as needed

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
        Available Sites
      </Typography>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: isMobile ? 15 : 30,
          color: "white",
          textShadow: "0px 0px 8px #FFFFFF",
        }}
      >
        VARIOUS PLATFORMS TO TEST YOUR LUCK WITH, SO GO AHEAD & WIN BIG
      </Typography>
      <Grid container spacing={1}>
        {sites.map((item, index) => {
          return (
            <Grid item xs={12} lg={4} md={4}>
              <div
                className={"siteItem"}
                onClick={(e) => handleSiteClick(e, item?.url)}
              >
                <img
                  key={index}
                  src={item.img}
                  alt={`site`}
                  style={{
                    width: isMobile ? '100%' :  `${imageSize}px`,
                    maxHeight: 60,
                  }}
                />
              </div>
            </Grid>
          );
        })}
      </Grid>


      <Typography
        sx={{
          fontWeight: 600,
          fontSize: isMobile ? 15 : 30,
          color: "white",
          textShadow: "0px 0px 8px #FFFFFF",
        }}
      >
        Play First Choice Games for Gamers like yourself
      </Typography>

      <div className="gameContainer">
          {sites2.map((item, index) => (
            <div className="gameItem">
              <img
                key={index}
                src={item.img}
                alt={`site`}
                style={{
                  width: `${imageSize}px`,
                  height: "auto",
                  borderRadius: "10em",
                }}
              />
            </div>
          ))}
        </div>

      <Divider />
    </div>
  );
}

export default SitesV2;
