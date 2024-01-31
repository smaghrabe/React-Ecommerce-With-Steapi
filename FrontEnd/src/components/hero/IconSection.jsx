import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";

const IconSection = () => {
  return (
    <Container sx={{ bg: "#000" }}>
      <Stack
        divider={<Divider orientation="vertical" flexItem />}
        sx={{ flexWrap: "wrap" }}
        direction={"row"}
        alignItems={"center"}
      >
        <MyBox
          icon={<DeliveryDiningOutlinedIcon fontSize="large" />}
          title={"Fast Dilvery"}
          supTitle={"Start From $10"}
        />
        <MyBox
          icon={<CreditScoreOutlinedIcon fontSize="large" />}
          title={"Mony Guarantee"}
          supTitle={"7 Days Back"}
        />
        <MyBox
          icon={<AccessAlarmsOutlinedIcon fontSize="large" />}
          title={"365 Days"}
          supTitle={"For Free To Return"}
        />
        <MyBox
          icon={<WorkspacePremiumOutlinedIcon fontSize="large" />}
          title={"Payment"}
          supTitle={"System Secure"}
        />
      </Stack>
    </Container>
  );
};

export default IconSection;

// eslint-disable-next-line react/prop-types
const MyBox = ({ icon, title, supTitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        width: "200px",
        flexGrow: 1,
        alignItems: "center",
        gap: 3,
        justifyContent: "center",
        p: 1.6,
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
          variant="body1"
        >
          {supTitle}
        </Typography>
      </Box>
    </Box>
  );
};
