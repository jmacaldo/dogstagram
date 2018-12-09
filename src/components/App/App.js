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
      end: false
    }
  }

  componentWillMount(){
      axios.get(`https://dog.ceo/api/breeds/image/random/5`)
      .then(res => {
        this.setState({
          data: res.data.message
        })
      })

// Loads additional images once the end of the window is reached
    //   window.onscroll = () => {
    //   if (
    //     window.innerHeight + document.documentElement.scrollTop
    //     === document.documentElement.offsetHeight && this.state.data.length < 11
    //   ) {
    //     this.setState({isLoading: true})
    //     axios.get(`https://dog.ceo/api/breeds/image/random/5`)
    //     .then(res => {
    //       setTimeout(()=>{
    //         this.setState({
    //           data: [...this.state.data.concat(res.data.message) ]
    //         })
    //       },500)
    //
    //     })
    //     .then(this.setState({isLoading: false}))
    //   } else  {
    //     this.setState({end: true, isLoading: false})
    //   }
    // };
//End of infinite scroll feature
  }

  componentDidMount(){
    document.addEventListener('scroll', () => {
      if (
          window.innerHeight + document.documentElement.scrollTop
          === document.documentElement.offsetHeight
        ) {
          console.log('end reached');
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
        } 
     });

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

        {this.state.isLoading&&
          <div className="loadMore">
            <img src={require('./loading.gif')} />
          </div>
        }

        {this.state.end && this.state.data.length > 10 &&
          <div className="loadMore">
            <p>All out of puppers!</p>
          </div>
        }

      </div>
    );
  }
}

export default App;
