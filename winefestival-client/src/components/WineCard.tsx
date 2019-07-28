import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VoteIcon from '@material-ui/icons/HowToVote';
import { Link } from 'react-router-dom';

import './WineCard.scss';

const useStyles = makeStyles(theme => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className="WineCard">
      <CardHeader
        action={
          <IconButton
            aria-label="vote"
            component={props => <Link to="vote" {...props} />}
          >
            <VoteIcon />
          </IconButton>
        }
        title="Gerard Bertrand Cote des Roses"
        subheader="2016"
      />
      <CardMedia
        className="WineCard__Media"
        image="https://cdn.shopify.com/s/files/1/2479/4148/products/793426_1024x1024.jpg?v=1560612887"
        title="Rose wine"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          A soft, pale, brilliant pink with bluish tints developing over time
          towards more orangey nuances. The bouquet releases aromas of summer
          fruits, cassis and redcurrant. Floral notes of rose along with hints
          of grapefruit complete the picture. The finish is fresh, offering
          notes of candy. On the palate the impression is fresh and full, with
          great aromatic persistence and balance.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Score:</Typography>
          <Typography paragraph>4.3</Typography>
          <Typography paragraph>Team</Typography>
          <Typography paragraph>This wine was brought by team 3</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
