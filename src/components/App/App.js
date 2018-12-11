import React, { Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';
import DogCard from './Card'
import Nav from './Nav'
import randomUser from './users'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      data:[],
      isLoading: false,
      end: false,
      limit: false
    }
  }

  componentWillMount(){
      axios.get(`https://dog.ceo/api/breeds/image/random/5`)
      .then(res => {
        this.setState({
          data: res.data.message
        })
      })

  }

  componentDidMount(){
  window.onscroll = () => {
    if (
        document.documentElement.clientHeight + window.scrollY
        === document.documentElement.offsetHeight && this.state.data.length < 20
      ) {
        this.setState({isLoading: true})
        console.log(this.state.isLoading);

        axios.get(`https://dog.ceo/api/breeds/image/random/5`)
            .then(res => {

              setTimeout(()=>{
                this.setState({
                  data: [...this.state.data.concat(res.data.message) ]
                })
              },500)

            })
            .then(this.setState({isLoading: false}))
            .then(console.log(this.state.isLoading))
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
          <DogCard key={index} image={dog} user={randomUser()} />
        ))}

        {!this.state.isLoading&&
          <div className="loadMore">
            <img src={require('./dogload.gif')} />
          </div>
        }

        {this.state.limit &&
          <div className="loadMore">
            <h5>All out of puppers!</h5>
          </div>
        }

      </div>
    );
  }
}

export default App;
