import React, { Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
import FavoriteOutlined from '@material-ui/icons/FavoriteOutlined';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import randomUser from './users'

const styles = {
  card: {
    maxWidth: 500,
    margin: "auto",
    marginBottom: 30
  },
  media: {
    height: 500,
  }
};

class DogCard extends Component {

  constructor(props){
    super(props);

  }

  componentWillMount(){
    //this.setState({user: randomUser})

  }

  componentDidMount(){
  //  console.log(this.state.user);
  }

  render() {
    const { className, ...props} = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        {!this.props.image &&
          <div>Loading...</div>
        }
        {this.props.image &&
          <div className="card">
            <Card style={styles.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe" style={styles.avatar} src={require('./imgs/'+this.props.user.toLowerCase()+'.jpg')} />
                  }
                  title={this.props.user}
                />
                <CardMedia
                  style={styles.media}
                  image={this.props.image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    <FavoriteOutlined />
                  </Typography>
                  <Typography component="p">
                    <b>{this.props.user} </b>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
            </Card>
          </div>
        }
      </div>
    );
  }
}

export default DogCard;
