import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MapIndex from '../map/mapIndex';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Person from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import UserIndex from '../user/UserIndex';
import TeamIndex from '../team/TeamIndex';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        minHeight: 'unset',
        margin: 0,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary.light,
    },
    body: {
        minHeight: '90vh',
    },

}));


export default function MainView() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                    primary: {
                        // light: will be calculated from palette.primary.main,
                        main: '#ff4400',
                        // dark: will be calculated from palette.primary.main,
                        // contrastText: will be calculated to contrast with palette.primary.main
                    },
                    secondary: {
                        light: '#0066ff',
                        main: '#0044ff',
                        // dark: will be calculated from palette.secondary.main,
                        contrastText: '#ffcc00',
                    },
                },
            }),
        [prefersDarkMode],
    );

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    //const [state, setState] = React.useState();

    return (
        <>
            <ThemeProvider theme={theme}>

                {/*   <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                   <Box width="100%">
                                    <MapIndex/>     
                                    </Box>
                            </Grid>

                        </Grid>
                    </div> */}
                <Router>

                    <Switch>
                            <Route path="/" component={MapIndex} exact />
                            <Route path="/team" component={TeamIndex} />
                            <Route path="/user" component={UserIndex} />
                    </Switch>
                    <BottomNavigation
                        value={value}
                        onChange={(evet, newValue) =>setValue(newValue)}
                        showLabels
                        className={classes.root}
                    >
                        <BottomNavigationAction label="Map" icon={<LocationOnIcon />} component={Link} to="/" />
                        <BottomNavigationAction label="Team" icon={<FavoriteIcon />} component={Link} to="/team" />
                        <BottomNavigationAction label="Me" icon={<Person />} component={Link} to="user" />
                    </BottomNavigation>
                </Router>
            </ThemeProvider>
        </>
    )
}