import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 180,
    },
  });

const theme = createMuiTheme({
  palette: {
    neutral: {
      main: '#0f5499',
    },
  },
});

  

const Cards = ({img, name, descrip, passive, hidden}) => {
    const classes = useStyles();   
    
    return(
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img}
              title={name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {descrip}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <ThemeProvider theme={theme}>
              <Button size="small" color="primary" onClick={() => alert(`${passive}`)} >
                Passive Ability
              </Button>
              <Button size="small" color="secondary" onClick={() => alert(`${hidden}`)}>
                Hidden Ability
              </Button>
            </ThemeProvider>
          </CardActions>
    </Card>
    );
}

export default Cards;

