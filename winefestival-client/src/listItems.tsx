import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import InfoIcont from '@material-ui/icons/Info';
import EventIcon from '@material-ui/icons/Event';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>
    <ListItem button component={props => <Link to="" {...props} />}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Welcome" />
    </ListItem>
    <ListItem button component={props => <Link to="about" {...props} />}>
      <ListItemIcon>
        <InfoIcont />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>
    <ListItem button component={props => <Link to="events" {...props} />}>
      <ListItemIcon>
        <EventIcon />
      </ListItemIcon>
      <ListItemText primary="Events" />
    </ListItem>
    <ListItem button component={props => <Link to="wines" {...props} />}>
      <ListItemIcon>
        <FavoriteIcon />
      </ListItemIcon>
      <ListItemText primary="Wines" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Previous Events</ListSubheader>
    <ListItem button component={props => <Link to="rosewines" {...props} />}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Rose" />
    </ListItem>
    <ListItem button component={props => <Link to="redwines" {...props} />}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Red" />
    </ListItem>
  </div>
);
