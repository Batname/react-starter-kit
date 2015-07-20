import _ from 'lodash';
import EventEmitter from 'eventemitter3';
import Dispatcher from '../core/Dispatcher';
import TweetsTypes from '../constants/TweetsTypes';

const CHANGE_EVENT = 'change';
let tweets = [{name: 'First', message: 'First message'}, {name: 'Second', message: 'Second message'}];

let TweetsStore = _.assign({}, EventEmitter.prototype, {
  emitChange() {
    return this.emit(CHANGE_EVENT);
  },
  onChange(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  off(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getTweetItems() {
    return tweets;
  },
  addTweet(tweet){
    tweets.push(tweet);
  }
});

TweetsStore.dispatchToken = Dispatcher.register((action) => {

  switch(action.type) {
    case TweetsTypes.LOAD_TWEETS:
      let tweet = _.assign({}, {name: action.data.body.user.name, message: action.data.body.message});
      TweetsStore.addTweet(tweet);
      TweetsStore.emitChange();
      break;
  }

});

export default TweetsStore;
