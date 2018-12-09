import React, { Component } from 'react';
import classnames from 'classnames';
import './style.css';
import {logo} from './logo.png'
import {dog} from './dog.svg'

class Nav extends Component {

  constructor(props){
    super(props);

    this.state = {
      isTop: true,
    }

    this.onScroll = this.onScroll.bind(this);
  }

  onScroll(isTop) {
   this.setState({ isTop });
  }


  componentDidMount() {
   document.addEventListener('scroll', () => {
     const isTop = window.scrollY < 50;
     if (isTop !== this.state.isTop) {
       this.onScroll(isTop);
     }
    });
  }

  render() {
    const { className, ...props} = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <div className={this.state.isTop ? 'navUp' : 'navDown'}>
          <div className={this.state.isTop ? 'topLeftUp' : 'topLeftDown'}>
            <img className={this.state.isTop ? 'iconUp' : 'iconDown'} src={require('./dog.png')}></img>
            <img src={require('./pipe.png')}></img>
            <img className={this.state.isTop ? 'logoUp' : 'logoDown'} src={require('./logo.png')}></img>
          </div>

          <span className="filler"></span>
          <span className="filler"></span>
        </div>

      </div>
    );
  }
}

export default Nav;
