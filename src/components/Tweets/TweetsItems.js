import React, {PropTypes} from 'react';
import _ from 'lodash';
import TweetsStore from './../../stores/TweetsStore';
import tweetsWatchMixin from '../../mixins/tweetsWatchMixin';

function getTweetsItems() {
  return {items: TweetsStore.getTweetItems()};
}

let TweetItems = {
  propTypes: {
    label: PropTypes.string
  },
  mixins: [tweetsWatchMixin(getTweetsItems)],
  render() {
    let items = _.map(this.state.items, (item, i) => {
      return (
        <tr key={i} ref="newRow">
          <td>{item.name}</td>
          <td>{item.message}</td>
        </tr>
        );
    });
    return (
      <tbody>{items}</tbody>
      );
  }
};

export default React.createClass(TweetItems);
