import {
  Box,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React, { useState } from "react";

//card
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
// icon cart and evelwtion
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import { AddShoppingCartOutlined, Close } from "@mui/icons-material";
import { useGetproductByNameQuery } from "../../redux/Product";

const Main = () => {
  const handleAlignment = (event, newValue) => {
    setmyData(newValue);
  };

  // eslint-disable-next-line no-unused-vars
  const theme = useTheme();

  // dilog handel
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // dilog handel

  // api handel

  // fillter to prodect

  const allProductsAPI = "products?populate=*";
  const menCategoryAPI = "products?populate=*&filters[category][$eq]=Men";
  const womenCategoryAPI = "products?populate=*&filters[category][$eq]=Women";
  const [myData, setmyData] = useState(allProductsAPI);

  const { data, error, isLoading } = useGetproductByNameQuery(myData);

  if (data) {
    console.log(data.data);
  }

  if (isLoading) {
    return <Typography variant="h5">LODING.....</Typography>;
  }

  if (error) {
    return <Typography variant="h5">{error.massage}</Typography>;
  }

  //end api handel
  if (data) {
    return (
      <Container sx={{ py: 8 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography fontWeight={300} variant="body1">
              All Our New Collaction Arrivals In a Exclusive Brand Section
            </Typography>
          </Box>

          <ToggleButtonGroup
            color="error"
            value={myData}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233, 69, 96, 0.5) !important",
                color: "#e94560",
                backgroundColor: "initial",
              },
            }}
          >
            <ToggleButton
              sx={{ color: "theme.palette.text.primary" }}
              className="myButton"
              value={allProductsAPI}
              aria-label="left aligned"
            >
              All Products
            </ToggleButton>
            <ToggleButton
              sx={{
                mx: "16px !important",
                color: "theme.palette.text.primary",
              }}
              className="myButton"
              value={menCategoryAPI}
              aria-label="centered"
            >
              Men Category
            </ToggleButton>

            <ToggleButton
              sx={{ color: "theme.palette.text.primary" }}
              className="myButton"
              value={womenCategoryAPI}
              aria-label="right aligned"
            >
              Woman Category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          {data.data.map((item) => {
            return (
              <Card
                key={item}
                sx={{
                  maxWidth: 300,
                  mt: 6,
                  ":hover .MuiCardMedia-root ": {
                    scale: "1.1",
                    transition: "0.35s",
                    rotate: "5deg",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 240 }}
                  image={`${item.attributes.image.data[0].attributes.url}`}
                  alt="Paella dish"
                />

                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography gutterBottom variant="h6" component={"div"}>
                      {item.attributes.title}
                    </Typography>
                    <Typography variant="subtitle1">
                      ${item.attributes.price}
                    </Typography>
                  </Stack>

                  <Typography variant="body2" color={"text.secondary"}>
                    {item.attributes.description}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    sx={{ textTransform: "capitalize" }}
                    size="large"
                    onClick={handleClickOpen}
                  >
                    <ShoppingCartCheckoutOutlinedIcon
                      sx={{ mr: 1 }}
                      fontSize="small"
                    />
                    Add To Cart
                  </Button>
                  <Rating
                    precision={0.5}
                    name="read-only"
                    value={item.attributes.rating}
                    readOnly
                  />
                </CardActions>
              </Card>
            );
          })}
        </Stack>

        {/* Dialog for open card and choose color */}
        <Dialog
          sx={{
            ".MuiPaper-root": {
              minWidth: { xs: "100%", md: 800 },
            },
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {/*Start icon button */}
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "360deg", transition: "1s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          {/*End icon button */}

          {/*Start prodect detiles card */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2.5,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box display={"flex"}>
              <img width={350} src="src\img\22.jpg" alt="img" />
            </Box>

            <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
              <Typography variant="h5">WOMANS FASHION</Typography>
              <Typography
                my={0.4}
                fontSize={"22px"}
                color={"crimson"}
                variant="h4"
              >
                $12.99
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                veniam. Exercitationem optio a ex neque eius quos, incidunt
                earum cupiditate quis asperiores.
              </Typography>

              <Stack
                sx={{ justifyContent: { xs: "center", sm: "left" } }}
                direction={"row"}
                gap={1}
                my={2}
              >
                {["src/img/22.jpg", "src/img/11.jpg"].map((item) => {
                  return (
                    <img
                      style={{ borderRadius: 3 }}
                      width={90}
                      height={100}
                      key={item}
                      src={item}
                    />
                  );
                })}
              </Stack>

              <Button
                sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
                variant="contained"
              >
                <AddShoppingCartOutlined sx={{ mr: 1, fontSize: "small" }} />
                Buy Now
              </Button>
            </Box>
          </Box>
          {/*End prodect detiles card */}
        </Dialog>
        {/* Dialog for open card and choose color */}
      </Container>
    );
  }
};

export default Main;
