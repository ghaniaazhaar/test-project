
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ padding: 2, textAlign: "center" }}>
      <Typography variant="body2" color="textSecondary">
        © 2024 My Next.js App
      </Typography>
    </Box>
  );
};

export default Footer;
