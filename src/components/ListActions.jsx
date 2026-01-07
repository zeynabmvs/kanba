import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { openModal } from "features/modalSlice";
import { changeListSort } from "features/boards/boardsSlice";

const ListActions = ({ list }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [submenuAnchorEl, setSubmenuAnchorEl] = useState(null);
  const [submenu2AnchorEl, setSubmenu2AnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const submenuOpen = Boolean(submenuAnchorEl);
  const submenu2Open = Boolean(submenu2AnchorEl);

  const handleClose = () => {
    setAnchorEl(null);
    setSubmenuAnchorEl(null);
    setSubmenu2AnchorEl(null);
  };

  const onEditHandler = () => {
    dispatch(openModal({ type: "editList", detail: list }));
    handleClose();
  };

  const onDeleteHandler = () => {
    dispatch(
      openModal({
        type: "confirmDelete",
        detail: {
          type: "list",
          obj: list,
          message: `Are you sure you want to delete list ${list.title} and all of its tasks?`,
        },
      })
    );
    handleClose();
  };

  const onSortHandler = (newSort) => {
    if (newSort === list.sort) return;
    dispatch(
      changeListSort({ sortBy: newSort, direction: list.direction, list: list })
    );
  };

  const onDirectionHandler = (newDirection) => {
    if (newDirection === list.direction) return;
    dispatch(
      changeListSort({ sortBy: list.sort, direction: newDirection, list: list })
    );
  };

  return (
    <>
      <IconButton
        id="listButton1"
        aria-controls={open ? "listMenu1" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{
          "& .MuiSvgIcon-root": {
            color:
              theme.palette.mode === "light"
                ? theme.palette.customGrey.main
                : theme.palette.customGrey.light,
          },
          p: 0,
          "&:hover": { background: "none" },
        }}
      >
        <MoreVertIcon
          sx={{
            color: "#fff",
            "&:hover": { color: theme.palette.primary.main },
          }}
        />
      </IconButton>

      <Menu
        id="listMenu1"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "listButton1",
        }}
      >
        <MenuItem onClick={onEditHandler}>Edit list</MenuItem>
        <MenuItem
          onClick={(e) => setSubmenuAnchorEl(e.currentTarget)}
          aria-describedby="sortSubmenu"
        >
          Sort
        </MenuItem>
        <Menu
          id="sortSubmenu"
          anchorEl={submenuAnchorEl}
          open={submenuOpen}
          anchorOrigin={{
            vertical: "center",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          onClose={() => setSubmenuAnchorEl(null)}
        >
          <MenuItem onClick={() => onSortHandler("date")}>Date</MenuItem>
          <MenuItem onClick={() => onSortHandler("priority")}>
            Priority
          </MenuItem>
          <MenuItem onClick={() => onSortHandler("title")}>Title</MenuItem>
        </Menu>

        <MenuItem
          onClick={(e) => setSubmenu2AnchorEl(e.currentTarget)}
          aria-describedby="directionSubmenu"
        >
          Direction
        </MenuItem>

        <Menu
          id="directionSubmenu"
          anchorEl={submenu2AnchorEl}
          open={submenu2Open}
          anchorOrigin={{
            vertical: "center",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          onClose={() => setSubmenu2AnchorEl(null)}
        >
          <MenuItem onClick={() => onDirectionHandler("asc")}>
            Assending
          </MenuItem>
          <MenuItem onClick={() => onDirectionHandler("desc")}>
            Descending
          </MenuItem>
        </Menu>

        <MenuItem sx={{ color: "red" }} onClick={onDeleteHandler}>
          Delete list
        </MenuItem>
      </Menu>
    </>
  );
};

export default ListActions;
