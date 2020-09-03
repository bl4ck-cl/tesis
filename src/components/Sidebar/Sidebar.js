import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MapIcon from "@material-ui/icons/Map";
import StoreIcon from "@material-ui/icons/Store";
import Home from '../Home/Home'
import Map from '../Maps/Maps'
import Clients from "../Clients/Clients";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import styles from './Styles'
import HomeIcon from "@material-ui/icons/Home";



class PersistentDrawerLeft extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  iconos = [
    { Nombre: "Home", Icon: <HomeIcon /> },
    { Nombre: "Mapa", Icon: <MapIcon /> },
    { Nombre: "Clientes", Icon: <StoreIcon /> },
  ];

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;
    //console.log(styles(theme).linkTo)
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Localizador de instalaciones
            </Typography>
          </Toolbar>
        </AppBar>
        <BrowserRouter>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              {["Home", "Mapa", "Clientes"].map((text) => (
                <ListItem button key={text} component={Link} to={"/" + text}>
                  <ListItemIcon>
                    {/* {index % 2 === 0 ? <MapIcon /> : <StoreIcon />} */}
                    {this.iconos.map((Icon) => {
                      if (Icon.Nombre === text) return Icon.Icon;
                    })}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <Switch>
              <Route
                path="/Home"
                render={() => (
                  <div style={styles(theme).textContent}>
                    <Home />
                  </div>
                )}
              />
              <Route path="/Mapa" render={() => <Map />} />
              <Route
                path="/Clientes"
                render={() => (
                  <div style={styles(theme).textContent}>
                    <Clients />
                  </div>
                )}
              />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
