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
      isLoading: false
    }
  }

  componentDidMount(){
      axios.get(`https://dog.ceo/api/breeds/image/random/5`)
      .then(res => {
        this.setState({
          data: res.data.message
        })
      })

// Loads additional images once the end of the window is reached
      window.onscroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        this.setState({isLoading: true})
        axios.get(`https://dog.ceo/api/breeds/image/random/5`)
        .then(res => {
          setTimeout(()=>{
            this.setState({
              data: [...this.state.data.concat(res.data.message) ]
            })
          },500)

        })
        .then(this.setState({isLoading: false}))
        console.log(this.state.data.length);
      }
    };
  }


  render() {
    const { className, ...props} = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <Nav />
        <div className="centerFill"></div>
        {this.state.data.map((dog, index)=> (
          <DogCard key={index} image={dog} user={randomUser()}  />
        ))}

        {!this.state.isLoading&&
          <div className="loadMore">
            <img src={require('./loading.gif')} />
          </div>

        }

      </div>
    );
  }
}

export default App;
