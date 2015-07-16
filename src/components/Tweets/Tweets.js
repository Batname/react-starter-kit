import React, { PropTypes } from 'react';
import styles from './Tweets.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)

class Tweets {
  static defaultProps = {
    onSetTweets: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="Tweets" id="tweets">
        <span>Hello Tweets</span>
      </div>
    );
  }
}

export default Tweets;
