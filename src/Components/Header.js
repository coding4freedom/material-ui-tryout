import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Typograph from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { fade, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
}));


const Header = () => {
    const classes = useStyles();

    // need to fix search input field its overlapping icon
    return(
        <>
            <CssBaseline />
            <AppBar position='static'>
                <Toolbar>
                    <Typograph variant='h4'>
                        Monster Cards
                    </Typograph>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                        <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;