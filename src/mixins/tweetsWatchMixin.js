import React from 'react';

import TweetsStore from '../stores/TweetsStore';

let TweetsWatchMixin = (cb) =>{
  return {
    getInitialState() {
      return cb(this);
    },
    componentWillMount() {
      TweetsStore.onChange(this.onChange);
    },
    componentWillUnount(){
      TweetsStore.off(this.onChange);
    },
    onChange() {
      this.setState(cb(this));
      let row = React.findDOMNode(this.refs.newRow);
      row.classList.add('highlight');
      let offsetLeft = row.offsetLeft;
      let offsetTop = row.offsetTop;
      window.scrollTo(offsetLeft, offsetTop);
    }
  };
};

export default TweetsWatchMixin;
