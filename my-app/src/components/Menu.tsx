import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

// style du Menu
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

// Propritétés du menu
interface MenuProps {
    text:string
}

// 
function Menu({text}:MenuProps){
    const classes = useStyles();

    const handleClick = () => {
        window.alert(text)
    }

    return (
        
        <div className={classes.root}>
        <Router>
          <Paper className={classes.paper}>
            <MenuList>
              <MenuItem><Link to ="/homepage">Home Page</Link></MenuItem>
              <MenuItem onClick={handleClick}><Link to ="/goldenbook">Golden Book</Link></MenuItem>
            </MenuList>
          </Paper>
          <Switch>
              <Route path="/homepage">
                  <HomePage />
              </Route>
              <Route path="/goldenbook">
                  <GoldenBook />
              </Route>
          </Switch>
        </Router>

        
        </div>
      );

}

function HomePage(){
    return <div></div>;
}

function GoldenBook(){
    return <div></div>;
}

export default Menu;
