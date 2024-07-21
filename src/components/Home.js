import PropTypes from 'prop-types';

Home.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default function Home(props) {
  const { theme } = props;

  return (
    <div className={'m-0 bg-gray-400 p-2 pt-16' + theme.main.main_tw}>
      <h1 className='bg-inherit p-1 font-bold'>Welcome to the Home Page!</h1>
    </div>
  );
}
