import Request from '../core/Request';
import co from 'co';
import Dispatcher from '../core/Dispatcher';
import TweetsTypes from '../constants/TweetsTypes';
import 'babel/polyfill';

let loadTweets = function* (urls) {
  let data;
  try {
    let i = 0;
    let y = urls.length;
    while(i < y){
      data = yield Request.get(urls[i]);
      Dispatcher.dispatch({
        type: TweetsTypes.LOAD_TWEETS,
        data
      });
      i++;
    }
  }
  catch (err) {
    console.log( 'Do something with this:', err);
  }
};

export default {
                loadTweets: co.wrap(loadTweets)
                };
