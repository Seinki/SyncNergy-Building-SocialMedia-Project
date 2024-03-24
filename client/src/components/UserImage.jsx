import { Box } from "@mui/material";

// eslint-disable-next-line react/prop-types
const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box
      width={size}
      height={size}
      sx={{
        cursor: "pointer",
        "&:hover": {
          border: "2px solid white",
          borderRadius: "50%",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        style={{
          objectFit: "cover",
          border: "none",
          borderRadius: "50%",
          padding: "2px",
        }}
        width={size}
        height={size}
        alt="user"
        src={`http://localhost:3001/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
