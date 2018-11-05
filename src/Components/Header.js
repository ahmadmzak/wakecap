import React, { Component } from "react";
import {
    AppBar,
    Button,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Hidden,
    Switch
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {
    AccountCircle,
    ExpandMore,
    Brightness2,
    ExitToApp
} from "@material-ui/icons";
import withStyles from "@material-ui/core/styles/withStyles";

const drawerWidth = 240;

const styles = theme => ({
    appBar: {
        zIndex: 2000,
        marginLeft: drawerWidth,
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`
        }
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    toolBar: {
        display: "flex",
        justifyContent: "space-around",
        [theme.breakpoints.up("sm")]: {
            justifyContent: "space-between"
        }
    },
    noWrap: {
        flexShrink: 0,
        marginRight: "-20px",
        paddingRight: "10px"
    },
    menu: {
        zIndex: 20001
    },
    icon: {
        marginRight: theme.spacing.unit
    }
});

class Header extends Component {
    state = {
        anchorEl: null,
        anchorElSite: null,
        anchorElZone: null
    };

    handleClick = menu => event => {
        this.setState({ [menu]: event.currentTarget });
    };

    handleClose = menu => () => {
        this.setState({ [menu]: null });
    };

    render() {
        const { anchorElUser, anchorElSite, anchorElZone } = this.state;
        const { classes, title } = this.props;
        return (
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={this.props.handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Hidden xsDown implementation="css">
                        <Typography
                            variant="h5"
                            //color="inherit"
                            noWrap
                        >
                            {title}
                        </Typography>
                    </Hidden>

                    <div className={classes.noWrap}>
                        <Button
                            aria-owns={anchorElSite ? "site-menu" : undefined}
                            aria-haspopup="true"
                            onClick={this.handleClick("anchorElSite")}
                        >
                            <Typography variant="subtitle1">Site</Typography>
                            <ExpandMore />
                        </Button>
                        <Menu
                            id="site-menu"
                            anchorEl={anchorElSite}
                            open={Boolean(anchorElSite)}
                            onClose={this.handleClose("anchorElSite")}
                        >
                            <MenuItem
                                onClick={this.handleClose("anchorElSite")}
                            >
                                A
                            </MenuItem>
                            <MenuItem
                                onClick={this.handleClose("anchorElSite")}
                            >
                                B
                            </MenuItem>
                            <MenuItem
                                onClick={this.handleClose("anchorElSite")}
                            >
                                C
                            </MenuItem>
                        </Menu>
                        <Button
                            aria-owns={anchorElZone ? "zone-menu" : undefined}
                            aria-haspopup="true"
                            onClick={this.handleClick("anchorElZone")}
                        >
                            <Typography variant="subtitle1">Zone</Typography>
                            <ExpandMore />
                        </Button>
                        <Menu
                            id="zone-menu"
                            anchorEl={anchorElZone}
                            open={Boolean(anchorElZone)}
                            onClose={this.handleClose("anchorElZone")}
                        >
                            <MenuItem
                                onClick={this.handleClose("anchorElZone")}
                            >
                                1
                            </MenuItem>
                            <MenuItem
                                onClick={this.handleClose("anchorElZone")}
                            >
                                2
                            </MenuItem>
                            <MenuItem
                                onClick={this.handleClose("anchorElZone")}
                            >
                                3
                            </MenuItem>
                        </Menu>
                    </div>

                    <Button
                        aria-owns={anchorElUser ? "user-menu" : undefined}
                        aria-haspopup="true"
                        onClick={this.handleClick("anchorElUser")}
                    >
                        <AccountCircle fontSize="large" />
                        <Hidden smDown implementation="css">
                            <Typography
                                variant="subtitle1"
                                /*color="inherit"*/ noWrap
                            >
                                Username
                            </Typography>
                        </Hidden>
                        <ExpandMore />
                    </Button>
                    <Menu
                        id="user-menu"
                        anchorEl={anchorElUser}
                        open={Boolean(anchorElUser)}
                        onClose={this.handleClose("anchorElUser")}
                        className={classes.menu}
                    >
                        <MenuItem onClick={this.handleClose("anchorElUser")}>
                            <AccountCircle className={classes.icon} />
                            <Typography>Profile</Typography>
                        </MenuItem>
                        <MenuItem /*onClick={this.handleClose}*/>
                            <Brightness2 className={classes.icon} />
                            <Typography>Dark Mode</Typography>
                            <Switch
                                checked={this.props.dark}
                                onChange={this.props.onToggleDarkMode}
                                value="checked"
                                color="primary"
                            />
                        </MenuItem>
                        <MenuItem onClick={this.props.handleLogout}>
                            <ExitToApp className={classes.icon} />
                            <Typography>Logout</Typography>
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(Header);
