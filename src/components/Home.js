import PropTypes from "prop-types";

const my_info = {
  name: "Michael Beebe",
  email: "michaelbeebe1031@gmail.com",
  phone: "847-274-3448",
  location: "Atlanta, GA",
  urls: {
    linkedin: "https://www.linkedin.com/in/michaelbeebe9/",
    github: "https://github.com/mpb9",
  },
};

Home.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default function Home(props) {
  const theme = props.theme;
  console.log("Home -> theme", theme);

  return (
    <div className="m-0 bg-gray-400 p-2">
      <h1>Welcome to the Home Page!</h1>
    </div>
  );
}
