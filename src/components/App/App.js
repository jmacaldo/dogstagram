import React, { Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './style.css';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import red from '@material-ui/core/colors/red';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DogCard from './Card'


const styles = {
  card: {
    maxWidth: 500,
    margin: "auto"
  },
  media: {
    height: 500,
  },
  avatar: {
   backgroundColor: red[500],
 },
};

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      data:[],
    }
  }

  componentDidMount(){
      axios.get(`https://dog.ceo/api/breeds/image/random/5`)
      .then(res => {
        this.setState({
          data: res.data.message
        })
      })

  }

  render() {
    const { className, ...props} = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        {this.state.data.map((dog)=> (
          <DogCard image={dog} />
        ))}

      </div>
    );
  }
}

export default App;
