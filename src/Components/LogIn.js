import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { Redirect } from "react-router-dom";
import wakecapLogo from "../logo.png";

const styles = theme => ({
    layout: {
        width: "auto",
        display: "block", // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit *
            3}px ${theme.spacing.unit * 3}px`
    },
    logo: {
        width: "25vmin",
        height: "auto",
        margin: `${theme.spacing.unit}px ${theme.spacing.unit * 4}px ${theme
            .spacing.unit * 2}px ${theme.spacing.unit * 4}px`
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing.unit
    },
    submit: {
        marginTop: theme.spacing.unit * 3
    },
    link: {
        textDecoration: "none",
        color: "#ff8c17",
        "&:visited": {
            color: "#cdc0a1"
        },
        "&:hover": {
            color: "#0f0f0f"
        },
        "&:active": {
            color: "#0f0f0f"
        },
        fontSize: "0.9rem"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        //backgroundColor: "#fff3d2",
        overflow: "hidden"
    },
    margin: {
        marginTop: theme.spacing.unit * 0.5
    }
});

const LogIn = props => {
    const { classes, loggedIn } = props;

    return !loggedIn ? (
        <div className={classes.container}>
            <img
                className={classes.logo}
                src={wakecapLogo}
                alt="wakecap-logo"
            />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockIcon />
                    </Avatar>
                    <Typography component="h1" variant="h6">
                        Log into your account
                    </Typography>
                    <form className={classes.form}>
                        <FormControl margin="normal" /*required*/ fullWidth>
                            <InputLabel htmlFor="email">
                                Email Address
                            </InputLabel>
                            <Input
                                id="email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                        </FormControl>
                        <FormControl margin="normal" /*required*/ fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                name="password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </FormControl>
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                        />
                        <Button
                            //type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={props.handleLogin}
                        >
                            Log in
                        </Button>
                        <div className={classes.margin}>
                            <a className={classes.link} href="forgot-password">
                                Forgot password?
                            </a>
                        </div>
                        <Button
                            //type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                        >
                            Sign up
                        </Button>
                    </form>
                </Paper>
            </main>
        </div>
    ) : (
        <Redirect to={process.env.PUBLIC_URL + "/workers"} />
    );
};

LogIn.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LogIn);
