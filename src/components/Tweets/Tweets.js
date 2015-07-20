import React, { PropTypes } from 'react';
import TweetsItems from './TweetsItems';
import LoadTweets from './LoadTweets';
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
        <div className="content">
          <div className ="table">
            <table className="table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Message</th>
                </tr>
              </thead>
              <TweetsItems label="TweetsItems"/>
            </table>
          </div>
          <LoadTweets />
        </div>
      </div>
    );
  }
}

export default Tweets;
