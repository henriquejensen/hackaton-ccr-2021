import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import Home from "@material-ui/icons/Home";
import Favorite from "@material-ui/icons/Favorite";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Settings from "@material-ui/icons/Settings";
import Chat from "@material-ui/icons/Chat";
import Person from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

function Header() {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <div>MARCA</div>
      <div className={classes.icons}>
        <Link to="/">
          <Home />
        </Link>
        <Favorite />
        <ShoppingCart />
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <Settings />
        <Chat />
        <Person />
      </div>
    </section>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {},
  icons: {
    display: "flex",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default Header;
