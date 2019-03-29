import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

      const { selected, tab, selectTabHandler } = props;
  return (
    <div
      className={selected === tab ? 'tab active-tab' : 'tab'}
      onClick={selectTabHandler}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
PropTypes: {
  selected: PropTypes.bool,
}
export default Tab;
