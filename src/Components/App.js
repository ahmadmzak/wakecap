import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";
import {
    Dashboard,
    Face,
    LocationOn,
    Assignment,
    AssignmentInd,
    Build,
    Settings
} from "@material-ui/icons";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import LogIn from "./LogIn";
import Home from "./Home";
import Workers from "./Workers";

const colors = {
    primary: {
        light: "#ffbd4e",
        main: "#ff8c17",
        dark: "#c55d00",
        contrastText: "#0f0f0f"
    },
    secondary: {
        light: "#fff3d2",
        main: "#cdc0a1",
        dark: "#9c9072",
        contrastText: "#0f0f0f"
    },
    error: {
        main: "#e53935",
        contrastText: "#0f0f0f"
    }
};

const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        type: "light",
        ...colors
    }
});

const themeDark = createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        type: "dark",
        ...colors
    }
});

const routes = [
    { text: "Dashboard", icon: <Dashboard />, link: "/dashboard" },
    { text: "Workers", icon: <Face />, link: "/workers" },
    { text: "Zones", icon: <LocationOn />, link: "/zones" },
    { text: "Assign Helmets", icon: <AssignmentInd />, link: "/assign" },
    { text: "Reports", icon: <Assignment />, link: "/reports" },
    { text: "Manage Site", icon: <Build />, link: "/manage" },
    { text: "Settings", icon: <Settings />, link: "/settings" }
];

const fakeAuth = {
    isAuthenticated: true,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            fakeAuth.isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect to="/" />
            )
        }
    />
);

class App extends Component {
    state = { loggedIn: true, dark: false };

    handleLogin = () => {
        fakeAuth.authenticate(() => {
            this.setState({ loggedIn: true });
        });
    };

    handleLogout = () => {
        fakeAuth.signout(() => {
            this.setState({ loggedIn: false });
        });
    };

    toggleDarkMode = () => {
        this.setState(state => ({
            ...state,
            dark: !state.dark
        }));
    };

    render() {
        return (
            <MuiThemeProvider theme={this.state.dark ? themeDark : theme}>
                <CssBaseline />
                <Router>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={props => (
                                <LogIn
                                    {...props}
                                    loggedIn={this.state.loggedIn}
                                    handleLogin={this.handleLogin}
                                />
                            )}
                        />
                        {routes.map((route, index) => (
                            <PrivateRoute
                                key={route.text}
                                path={route.link}
                                component={props => (
                                    <Home
                                        {...props}
                                        index={index}
                                        routes={routes}
                                        dark={this.state.dark}
                                        handleLogout={this.handleLogout}
                                        toggleDarkMode={this.toggleDarkMode}
                                    >
                                        {index === 1 ? (
                                            <Workers />
                                        ) : (
                                            <div>{route.text}</div>
                                        )}
                                    </Home>
                                )}
                            />
                        ))}
                    </Switch>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
