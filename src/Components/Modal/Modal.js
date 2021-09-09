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
import './Modal.css';
import { Dropdown } from 'react-bootstrap';
import { AiFillCloseCircle } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";




const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const SwipeableTemporaryDrawer=({close})=> {
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
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <AiFillCloseCircle className="close-icon"/>

      <List>
        {['Inbox'].map((text, index) => (
          <>
        
        <label className="add-quest">Add Question</label>
        <input className="quest-input"/>
        
        <label className="add-quest">Answer Type</label>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
          </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Faces</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Stars</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Thumbs</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Hearts</Dropdown.Item>
          <Dropdown.Item href="#/action-5">Likert</Dropdown.Item>
          <Dropdown.Item href="#/action-5">Mutiple Choice</Dropdown.Item>
          <Dropdown.Item href="#/action-5">Select All</Dropdown.Item>


        </Dropdown.Menu>
        </Dropdown>

        <label className="add-quest">Categories</label>
  
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
          </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">3</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        <label className="add-quest">Status</label>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
          </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Active</Dropdown.Item>
          <Dropdown.Item href="#/action-2">InActive</Dropdown.Item>

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
          <p className="add-question" onClick={toggleDrawer(anchor, true)}><IoIosAddCircle className="plus-ques"/>Add New Question</p>
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
export default SwipeableTemporaryDrawer;