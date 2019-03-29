import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  console.log(props)
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
Tab.propTypes = {
  selected: PropTypes.string,
  onClick: PropTypes.func,
  tab: PropTypes.string
}
export default Tab;
