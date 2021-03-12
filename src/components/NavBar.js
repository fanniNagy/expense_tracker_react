import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {users} from "../context/UserContext";
import "../css/NavBar.css";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
const NavBar = () => {
    const {user, authenticated} = useContext(users);
    const classes = useStyles();

    return (
        <div className={`${classes.root} navbar`}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <div className={"navbar-title"}>
                        {authenticated ? (`${user.username}'s budget`) : ("XPNS Tracker")}
                        </div>
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default NavBar