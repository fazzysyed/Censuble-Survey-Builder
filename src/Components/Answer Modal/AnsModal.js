import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import './AnsModal.css';
import { Dropdown } from 'react-bootstrap';
import { AiFillCloseCircle } from "react-icons/ai";



const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <AiFillCloseCircle className="close-icon"/>

      <List>
        {['Inbox'].map((text, index) => (
          <>
        <input className="quest-input" placeholder="Add Answer"/>
        
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Answer Type
          </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Food</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Shopping</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Travel</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>

        <input className="quest-input" placeholder="Add Answer"/>
        
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Answer Type
          </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Food</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Shopping</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Travel</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
</>
        ))}
      </List>
      <button className="save-modal">
        Save
      </button>
      <Divider />
      
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <p className="add-question" onClick={toggleDrawer(anchor, true)}>Add New Answer</p>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
