import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Home from "@material-ui/icons/Home";
import Favorite from "@material-ui/icons/Favorite";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Settings from "@material-ui/icons/Settings";
import Chat from "@material-ui/icons/Chat";
import Person from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

import Logo from "../../logo.png";
import Link from "../link";

function Header() {
  const classes = useStyles();
  const iconStyle = { fontSize: 40 };
  return (
    <section className={classes.container}>
      <Link to="/">
        <img className={classes.logo} src={Logo} height="300" alt="Loop logo" />
      </Link>

      <div className={classes.icons}>
        <Link to="/">
          <span className={classes.icon}>
            <Home style={iconStyle} />
          </span>
        </Link>
        <span className={classes.icon}>
          <Favorite style={iconStyle} />
        </span>
        <Link to="/cart">
          <span className={classes.icon}>
            <ShoppingCart style={iconStyle} />
          </span>
        </Link>

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Nome do produto…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <span className={classes.icon}>
          <Settings style={iconStyle} />
        </span>
        <span className={classes.icon}>
          <Chat style={iconStyle} />
        </span>
        <Link to="/login">
          <span className={classes.icon}>
            <Person style={iconStyle} />
          </span>
        </Link>
      </div>
    </section>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
  },
  logo: {
    position: "absolute",
    top: -70,
    left: -70,
  },
  icons: {
    display: "flex",
    fontSize: 30,
    padding: 30,
    alignItems: "center",
  },
  icon: {
    color: "black",
  },
  search: {
    position: "relative",
    borderRadius: 30,
    backgroundColor: "white",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    height: 45,
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
