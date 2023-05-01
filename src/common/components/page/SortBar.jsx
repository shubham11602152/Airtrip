import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import SortIcon from "@mui/icons-material/Sort";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const sortByOptions = {
  price: "Low to high",
  Duration: "Shortest First",
  Depart: "Earliest First",
  Arrival: "Earliest First",
};
export default function SortBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleIcon = () => {
    if (open) return <KeyboardArrowUpIcon />;
    return <KeyboardArrowDownIcon />;
  };

  return (
    <>
      <SortIcon />
      <Button
        onClick={handleClick}
        variant="text"
        color="primary"
        endIcon={toggleIcon()}
      >
        Sort
      </Button>
      <Menu
        id=""
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        {Object.entries(sortByOptions).map(([key, value]) => (
          <MenuItem key={key} onClick={() => {}}>
            <Typography variant="body1" color="initial" marginRight={1}>
              {key}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {value}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
