import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import logoDark from "../../assets/logos/logoDark.svg";
import logoLight from "../../assets/logos/logoLight.svg";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const currentMode = useSelector((state) => state.mode);

  // Determine logo based on current mode
  const logo = currentMode === "dark" ? logoLight : logoDark;
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          <img src={logo} width={150} alt="Syncnergy-logo" />
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Syncnergy, Connecting Hearts and Minds Across Cyberspace!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
