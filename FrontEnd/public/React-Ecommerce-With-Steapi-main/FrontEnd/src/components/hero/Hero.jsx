import {
  Container,
  Box,
  Stack,
  Link,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Swiper.css";

const mySlider = [
  { text: "WOMEN", link: "src/img/banner-25.jpg" },
  { text: "MEN", link: "src/img/banner-15.jpg" },
];

const Hero = () => {
  const theme = useTheme();
  return (
    <Box>
      <Container
        sx={{
          mt: 2.5,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {mySlider.map((item) => {
            return (
              <SwiperSlide key={item.link} className="hide-pic">
                <img src={item.link} alt="img" />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "10%",
                      textAlign: "left",
                    },
                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                  }}
                >
                  <Typography sx={{ color: "#222" }} variant="h5">
                    LIFESTYLE COLLECTION
                  </Typography>
                  <Typography
                    sx={{ color: "#222", fontWeight: 400, my: 1 }}
                    variant="H3"
                  >
                    {item.text}
                  </Typography>

                  <Stack
                    sx={{ justifyContent: "center" }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography variant="h4" color="#333" mr={1}>
                      SALE UP TO
                    </Typography>

                    <Typography variant="h4" color="#d23f57">
                      20% OFF
                    </Typography>
                  </Stack>

                  <Typography
                    sx={{ color: "#000", fontWeight: 300, my: 1 }}
                    variant="body1"
                  >
                    Get Free Shipping on orders over $99.00
                  </Typography>
                  <Button
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      backgroundColor: "#222",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0, 1)",
                      color: "#fff",
                      borderRadius: 1,
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43, 52, 69, 0, 1)",
                      },
                    }}
                    variant="contained"
                  >
                    Shop Now
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Box
          sx={{
            display: { xs: "none", md: "block", minWidth: "26.5%" },
          }}
        >
          <Box sx={{ position: "relative", pt: "10px" }}>
            <img width={"100%"} src="src\img\banner-17.jpg" alt="img" />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "40px",
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#2b3445", fontSize: "18px" }}
              >
                NEW ARRIVALS
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#2b3445", lineHeight: "16px", mr: 1 }}
              >
                SUMMER
              </Typography>
              <Typography variant="h6" sx={{ color: "#2b3445" }}>
                SALE 20% OFF
              </Typography>
              <Link
                sx={{
                  color: "#2b3445",
                  display: "center",
                  gap: "5px",
                  transition: "0.2s",
                  "&:hover": {
                    color: "#d23f57",
                  },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowRightAltOutlinedIcon
                  sx={{
                    fontSize: "15px",
                    position: "absolute",
                    top: "84px;",
                  }}
                />
              </Link>
            </Stack>
          </Box>

          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="src\img\banner-16.jpg" alt="img" />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "40px",
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#2b3445", fontSize: "18px" }}
              >
                GAMING 4K
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#2b3445", lineHeight: "16px", mr: 1 }}
              >
                DESKTOP &
              </Typography>
              <Typography variant="h6" sx={{ color: "#2b3445" }}>
                LAPTOPS
              </Typography>
              <Link
                sx={{
                  color: "#2b3445",
                  display: "center",
                  gap: "5px",
                  transition: "0.2s",
                  "&:hover": {
                    color: "#d23f57",
                  },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowRightAltOutlinedIcon
                  sx={{
                    fontSize: "15px",
                    position: "absolute",
                    top: "84px;",
                  }}
                />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
