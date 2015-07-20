import Request from '../core/Request';
import co from 'co';
import 'babel/polyfill';

let loadTweets = function* (urls) {
  let data;
  try {
    let i = 0;
    let y = urls.length;
    while(i < y){
      data = yield Request.get(urls[i]);
      console.log(data);
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
