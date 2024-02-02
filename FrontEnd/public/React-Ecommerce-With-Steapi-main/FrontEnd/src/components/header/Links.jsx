import { ChevronRightOutlined, ExpandMore } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
const Links = ({ title }) => {
  return (
    <Box
      sx={{
        ":hover .show-hover": { display: "block" },
        ":hover ": { cursor: "pointer" },
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography variant="body1">{title}</Typography>
      <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />

      <Box
        className="show-hover"
        sx={{
          position: "absolute",
          top: "100%", //50px i reomve it space between father and child element to easy select
          minWidth: "170px",
          left: "50%",
          transform: "translate(-50%)",
          display: "none",
          zIndex: 20,
        }}
      >
        <Paper sx={{ mt: 2, borderRadius: "5px" }}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": { fontSize: "14px" },
                    }}
                    primary="Dashboard"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem
                sx={{
                  ":hover .supLink": { display: "block" },
                  position: "relative",
                }}
                disablePadding
              >
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "14px" } }}
                    primary="Products"
                  />

                  <Box flexGrow={1} />
                  <ChevronRightOutlined fontSize="small" />
                </ListItemButton>

                <Box
                  className="supLink"
                  sx={{
                    position: "absolute",
                    top: 0,

                    left: "100%",
                    display: "none",
                  }}
                >
                  <Paper sx={{ ml: 1, minWidth: 150 }}>
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{ display: "flex", p: 0, px: 1.5 }}
                          >
                            <ListItemText
                              sx={{
                                ".MuiTypography-root": { fontSize: "14px" },
                              }}
                              primary="Add Product"
                            />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{ display: "flex", p: 0, px: 1.5 }}
                          >
                            <ListItemText
                              sx={{
                                ".MuiTypography-root": { fontSize: "14px" },
                              }}
                              primary="Edit Product"
                            />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "14px" } }}
                    primary="Orders"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "14px" } }}
                    primary="Profile"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
};

export default Links;
