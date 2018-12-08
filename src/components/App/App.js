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
      data:{},
      isLoading: true
    }
  }

  componentDidMount(){
      axios.get(`https://dog.ceo/api/breeds/image/random`)
      .then(res => {
        this.setState({
          data: res.data.message
        })
      })
      .then(this.setState({isLoading: false}))

  }

  render() {
    const { className, ...props} = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        {this.state.isLoading &&
          <div>Loading...</div>
        }
        {!this.state.isLoading &&
          <div className="card">
            <Card style={styles.card}>
              <CardActionArea>
                <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe" style={styles.avatar}>
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                />
                <CardMedia
                  style={styles.media}
                  image={this.state.data}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    Lizard
                  </Typography>
                  <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </div>
        }
      </div>
    );
  }
}

export default App;
