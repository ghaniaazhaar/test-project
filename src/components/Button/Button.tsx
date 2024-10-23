import Button from "@mui/material/Button";
import React from "react";

interface CustomButtonProps {
  label: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label }) => {
  return <Button variant="contained">{label}</Button>;
};

export default CustomButton;
