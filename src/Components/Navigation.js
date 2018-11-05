import React from "react";
import {
    Button,
    Drawer,
    Hidden,
    List,
    Divider,
    ListItem,
    ListItemText,
    ListItemIcon
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import wakecapLogo from "../logo.png";

const drawerWidth = 240;

const styles = theme => ({
    flex: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth
        //border: "none"
    },
    emergencyBtn: {
        backgroundColor: "#D50000",
        color: "#fff"
    },
    logo: {
        height: 64,
        marginTop: 7
    },
    link: {
        textDecoration: "none"
    }
});

const Navigation = props => {
    const { classes, container, mobileOpen, items } = props;

    const drawer = (
        <div className={classes.flex}>
            <div className={`${classes.toolbar} ${classes.flex}`}>
                <img
                    src={wakecapLogo}
                    alt="wakecap-logo"
                    className={classes.logo}
                />
            </div>
            <Divider />
            <List>
                {items.map((item, index) => (
                    <ListItem
                        button
                        key={item.text}
                        selected={props.selectedIndex === index}
                        onClick={event =>
                            props.handleListItemClick(event, index)
                        }
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
            <Button className={classes.emergencyBtn}>Emergency</Button>
        </div>
    );

    return (
        <nav className={classes.drawer}>
            <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={props.handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    );
};

export default withStyles(styles)(Navigation);
