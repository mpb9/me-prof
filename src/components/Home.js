import PropTypes from "prop-types";

Home.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default function Home(props) {
  const theme = props.theme;

  return (
    <div className={"m-0 bg-gray-400 p-2" + theme.main.inlineCSS}>
      <h1>Welcome to the Home Page!</h1>
    </div>
  );
}
