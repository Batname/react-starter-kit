import React, {PropTypes} from 'react';
import _ from 'lodash';

function getTweetsItems() {
  return {items: [{name: 'First', message: 'First message'}, {name: 'Second', message: 'Second message'}]};
}

let TweetItems = {
  propTypes: {
    label: PropTypes.string
  },
  getInitialState(){
    return getTweetsItems();
  },
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
