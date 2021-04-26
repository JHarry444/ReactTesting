import PropTypes from 'prop-types';

const ComponentWithProps = ({ text }) => <p>{text}</p>;

export default ComponentWithProps;

ComponentWithProps.propTypes = {
  text: PropTypes.string.isRequired,
};
