import React from 'react';
import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <p className={props.active ? classes.active : null}> {props.children} </p>
  </li>
);

export default navigationItem;
