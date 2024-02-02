import {
  Box,
  Container,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  Stack,
  // ListItemIcon,
  // ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

//icone
import WindowIcon from "@mui/icons-material/Window";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { useTheme } from "@emotion/react";

import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import { Close } from "@mui/icons-material";

//Accordion menu
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// list inside accordion
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Links from "./Links";

const Header3 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //to preber hok
  const theme = useTheme();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      ((event.key === KeyboardEvent).key === "Tab" ||
        (event.key === KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 5,
      }}
    >
      <Box>
        <Button
          // className="border" to mark border witin handel
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: 220,
            bgcolor: theme.palette.myColor.mColor,
            color: theme.palette.text.secondary,
          }}
        >
          <WindowIcon />
          <Typography
            sx={{
              padding: "0",
              textTransform: "capitalize",
              mx: 1,
            }}
          >
            categories
          </Typography>

          <Box flexGrow={1} />
          <ChevronRightOutlinedIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{ ".MuiPaper-root": { width: 220 } }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>
          {/*note: "handle close" to close menu when selected */}
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PedalBikeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ImportContactsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopMacOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Laptop</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      {/* show link in large screen */}
      {useMediaQuery("(min-width:1200px)") && (
        <Stack direction={"row"} alignItems={"center"} gap={4}>
          <Links title={"Home"} />
          <Links title={"Mega Mune"} />
          <Links title={"Full Screen"} />
          <Links title={"Pages"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        </Stack>
      )}

      {/* Small screen */}
      {useMediaQuery("(max-width:1200px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
        }}
      >
        <Box
          // className="border"
          sx={{
            width: "450px",
            mx: "auto",
            mt: 6,
            position: "relative",
            pt: 10,
          }}
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "360deg", transition: "1s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>
          {[
            { mainLink: "Home", supLink: ["Link 1", "Link 2", "Link 3"] },
            { mainLink: "Mega Menu", supLink: ["Link 1", "Link 2", "Link 3"] },
            { mainLink: "Pages", supLink: ["Link 1", "Link 2", "Link 3"] },
            { mainLink: "Info", supLink: ["Link 1", "Link 2", "Link 3"] },
            { mainLink: "Account", supLink: ["Link 1", "Link 2", "Link 3"] },
          ].map((item) => {
            return (
              <Accordion
                key={item.mainLink}
                elevation={0}
                sx={{ bgcolor: "initial" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {item.mainLink}
                </AccordionSummary>

                <List sx={{ py: 0, my: 0 }}>
                  {item.supLink.map((supItem) => {
                    return (
                      <ListItem key={supItem} sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={supItem} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
};

export default Header3;
