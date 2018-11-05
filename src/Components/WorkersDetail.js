import React, { Fragment } from "react";
import {
    Button,
    Grid,
    Typography,
    withStyles,
    Divider,
    IconButton
} from "@material-ui/core";
import { LocationOn, CalendarToday, AddCircle } from "@material-ui/icons";
import HelmetCard from "./HelmetCard";
import BarChart from "recharts/lib/chart/BarChart";
import Bar from "recharts/lib/cartesian/Bar";
import XAxis from "recharts/lib/cartesian/XAxis";
import YAxis from "recharts/lib/cartesian/YAxis";
import CartesianGrid from "recharts/lib/cartesian/CartesianGrid";
import Tooltip from "recharts/lib/component/Tooltip";
import ResponsiveContainer from "recharts/lib/component/ResponsiveContainer";

const styles = theme => ({
    root: {
        color: theme.palette.text.primary,
        padding: `${theme.spacing.unit * 3}px 0px`,
        //flexGrow: 1,
        width: "100%",
        height: "auto"
    },
    flex: {
        display: "flex",
        alignItems: "center",
        width: "100%"
    },
    flexColumn: {
        display: "flex",
        flexDirection: "column"
    },
    icon: {
        margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`
    },
    center: {
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        margin: `${theme.spacing.unit * 2}px 0px`,
        color: theme.palette.text.primary
    },
    chart: {
        /*[theme.breakpoints.down("md")]: {
            width: "100%"
        }*/
    },
    heading: {
        marginTop: theme.spacing.unit * 3
    },
    workersMid: {
        //display: "flex",
        //alignItems: "center",
        //justifyContent: "space-around"
    },
    chartContainer: {
        width: "65%",
        height: "100%",
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        }
    }
});

const data = [
    { date: "Today", hours: 8 },
    { date: "4 Jan", hours: 9 },
    { date: "3 Jan", hours: 10 },
    { date: "2 Jan", hours: 8 },
    { date: "1 Jan", hours: 11 },
    { date: "30 Dec", hours: 9 },
    { date: "29 Dec", hours: 9 },
    { date: "28 Dec", hours: 6 }
];

const WorkersDetail = props => {
    const { classes } = props;

    return (
        <Fragment>
            <Grid
                container
                spacing={24}
                className={`${classes.root} ${classes.workersMid}`}
            >
                <Grid
                    item
                    className={`${classes.center} ${classes.flexColumn}`}
                >
                    <div className={classes.flex}>
                        <CalendarToday className={classes.icon} />
                        <div>
                            <Typography>Total Hours Worked</Typography>
                            <Typography variant="h6">2425</Typography>
                        </div>
                    </div>
                    <div className={classes.flex}>
                        <LocationOn className={classes.icon} />
                        <div>
                            <Typography>Last Active Zone</Typography>
                            <Typography variant="h6">Zone 2</Typography>
                        </div>
                    </div>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                    >
                        Full History
                    </Button>
                </Grid>
                <Grid item className={classes.chartContainer}>
                    <ResponsiveContainer
                        className={classes.chart}
                        width="100%"
                        height={350}
                    >
                        <BarChart data={data}>
                            <XAxis dataKey="date" stroke="#8884d8" />
                            <YAxis />
                            <Tooltip />
                            <CartesianGrid
                                stroke="#ccc"
                                strokeDasharray="5 5"
                            />
                            <Bar
                                type="monotone"
                                dataKey="hours"
                                fill="#8884d8"
                                barSize={20}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid>
            <Divider />
            <Typography variant="h5" className={classes.heading}>
                Assigned Helmets
            </Typography>
            <Grid
                container
                spacing={24}
                className={classes.root}
                alignItems="center"
            >
                <Grid item>
                    <HelmetCard
                        details={{
                            id: 232534678,
                            time: "7 mins ago",
                            assigned: true,
                            user: "IN-006"
                        }}
                    />
                </Grid>
                <Grid item>
                    <HelmetCard
                        details={{
                            id: 342522418,
                            time: "2 days ago",
                            assigned: false,
                            user: "IN-008"
                        }}
                    />
                </Grid>
                <Grid item>
                    <IconButton color="primary" className={classes.button}>
                        <AddCircle fontSize="large" />
                    </IconButton>
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default withStyles(styles)(WorkersDetail);
