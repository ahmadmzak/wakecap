import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { LabelImportant, History, PersonPin } from "@material-ui/icons";

const styles = theme => ({
    card: {
        width: 250,
        height: 150
    },
    flex: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    icon: {
        marginRight: theme.spacing.unit * 2
    },
    grow: {
        flexGrow: 1
    },
    dotGreen: {
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: "green"
    },
    dotRed: {
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: "red"
    },
    push: {
        margin: `${theme.spacing.unit}px 0px`
    }
});

const HelmetCard = props => {
    const { classes, details } = props;

    return (
        <Card className={classes.card}>
            <CardContent>
                <div className={classes.flex}>
                    <div className={classes.grow} />
                    <div
                        className={
                            details.assigned ? classes.dotGreen : classes.dotRed
                        }
                    />
                </div>
                <div className={classes.flex}>
                    <LabelImportant className={classes.icon} />
                    <Typography component="p">{`#${details.id}`}</Typography>
                </div>
                <div className={`${classes.flex} ${classes.push}`}>
                    <PersonPin className={classes.icon} />
                    <Typography component="p">{details.user}</Typography>
                </div>
                <div className={classes.flex}>
                    <History className={classes.icon} />
                    <Typography component="p">{details.time}</Typography>
                </div>
            </CardContent>
        </Card>
    );
};

HelmetCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HelmetCard);
