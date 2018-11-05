import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";
import WorkersHeader from "./WorkersHeader";
import WorkersDetail from "./WorkersDetail";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: "flex",
        position: "relative"
    },
    appBar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        top: 64,
        left: drawerWidth,
        marginRight: drawerWidth,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        width: `calc(100% - ${drawerWidth}px)`,
        padding: theme.spacing.unit,
        [theme.breakpoints.down("xs")]: {
            left: 0,
            top: 56,
            width: "100%"
        }
    },
    appBarShift: {
        marginLeft: drawerWidth,
        zIndex: 1000,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        }),
        paddingLeft: theme.spacing.unit * 3,
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0
        }
    },
    menuButton: {
        marginLeft: 4,
        marginRight: 34,
        [theme.breakpoints.down("sm")]: {
            //marginLeft: -4,
            marginRight: 30
        }
    },
    hide: {
        display: "none"
    },
    drawerPaper: {
        position: "fixed",
        left: drawerWidth,
        top: 66,
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        }),
        [theme.breakpoints.down("sm")]: {
            left: 0,
            top: 54
        }
    },
    drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create(["width", "opacity"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing.unit * 9
        },
        [theme.breakpoints.down("sm")]: {
            opacity: 0
        }
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 6px",
        ...theme.mixins.toolbar,
        marginTop: theme.spacing.unit * 2
    },
    content: {
        //position: "relative",
        //left: 70,
        width: "100%",
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        paddingLeft: theme.spacing.unit * 12,
        [theme.breakpoints.down("sm")]: {
            //left: 50
            paddingLeft: theme.spacing.unit * 3
        }
    },
    textField: {
        marginLeft: theme.spacing.unit * 2
        //marginRight: theme.spacing.unit
    }
});

const workers = [
    { name: "Worker 1", id: "297728957" },
    { name: "Worker 2", id: "134440905" },
    { name: "Worker 3", id: "194850805" },
    { name: "Worker 4", id: "743029490" },
    { name: "Worker 5", id: "098285085" },
    { name: "Worker 6", id: "092035413" },
    { name: "Worker 7", id: "132098857" },
    { name: "Worker 8", id: "098084057" },
    { name: "Worker 9", id: "747728957" }
];

class Workers extends React.Component {
    state = {
        open: false
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Paper
                    //position="fixed"
                    square
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: this.state.open
                    })}
                >
                    <IconButton
                        //color="primary"
                        aria-label="Open drawer"
                        onClick={this.handleDrawerOpen}
                        className={classNames(classes.menuButton, {
                            [classes.hide]: this.state.open
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <WorkersHeader />
                </Paper>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classNames(
                            classes.drawerPaper,
                            !this.state.open && classes.drawerPaperClose
                        )
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbar}>
                        {this.state.open && (
                            <TextField
                                id="outlined-search"
                                label="Search workers"
                                type="search"
                                className={classes.textField}
                                margin="normal"
                                //variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Search />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        )}
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <List>
                        {workers.map((worker, index) => (
                            <ListItem
                                button
                                key={worker.name}
                                selected={index === 0}
                            >
                                <ListItemIcon>
                                    <AccountCircle />
                                </ListItemIcon>
                                <ListItemText
                                    primary={worker.name}
                                    secondary={worker.id}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <WorkersDetail />
                </main>
            </div>
        );
    }
}

Workers.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Workers);
