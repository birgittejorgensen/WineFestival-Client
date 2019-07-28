import * as React from 'react';
import Collapse from '@material-ui/core/Collapse';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EventIcon from '@material-ui/icons/Event';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import './EventCard.scss';
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  makeStyles
} from '@material-ui/core';

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
  },
}));

export default function EventReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className="EventCard">
      <CardHeader
        action={
          <IconButton
            aria-label="event"
            component={props => <Link to="event" {...props} />}
          >
            <EventIcon />
          </IconButton>
        }
        title="Rose Wine"
        subheader="August 3, 2019"
      />
      <CardMedia
        className="EventCard__Media"
        image="https://www.portugalresident.com/wp-content/uploads/2019/04/wine-tasting.jpg"
        title="Rose event summer 2019"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Enjoy rose in the hot sun!
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
          <Typography paragraph>Date:</Typography>
          <Typography paragraph>August 3rd 2019, 15:00</Typography>
          <Typography paragraph>Location:</Typography>
          <Typography paragraph>Kolonihaven</Typography>
          <Typography paragraph>Price:</Typography>
          <Typography>75kr.</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
