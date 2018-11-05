import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Header from "./Header";
import Navigation from "./Navigation";
import Content from "./Content";

const styles = theme => ({
    root: {
        display: "flex"
    }
});

class Home extends Component {
    state = {
        mobileOpen: false,
        selectedIndex: this.props.index
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    handleListItemClick = (event, index) => {
        this.setState({ selectedIndex: index });
        this.props.history.push(
            `${process.env.PUBLIC_URL}${this.props.routes[index].link}`
        );
    };

    render() {
        const { classes, routes } = this.props;

        return (
            <div className={classes.root}>
                <Header
                    dark={this.props.dark}
                    title={routes[this.state.selectedIndex].text}
                    handleLogout={this.props.handleLogout}
                    handleDrawerToggle={this.handleDrawerToggle}
                    onToggleDarkMode={this.props.toggleDarkMode}
                />
                <Navigation
                    items={routes}
                    container={this.props.container}
                    mobileOpen={this.state.mobileOpen}
                    selectedIndex={this.state.selectedIndex}
                    handleDrawerToggle={this.handleDrawerToggle}
                    handleListItemClick={this.handleListItemClick}
                />
                <Content>{this.props.children}</Content>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Home);
