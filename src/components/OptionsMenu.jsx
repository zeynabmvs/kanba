import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const OptionsMenu = ({ text, onEdit, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onEditHandler = ()=>{
      onEdit()
        handleClose()
    }


    const onDeleteHandler = ()=>{
        onDelete()
        handleClose()
    }
  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={onEditHandler}>Edit {text}</MenuItem>
        <MenuItem sx={{ color: "red" }} onClick={onDeleteHandler}>
          Delete {text}
        </MenuItem>
      </Menu>
    </>
  );
};

export default OptionsMenu;
