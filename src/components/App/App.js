import React, { Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';
import DogCard from './Card'
import {randomUser} from './users'
import Nav from './Nav'

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
        <Nav />
        {this.state.data.map((dog, index)=> (
          <DogCard key={index} image={dog} user={randomUser()}  />
        ))}

      </div>
    );
  }
}

export default App;
