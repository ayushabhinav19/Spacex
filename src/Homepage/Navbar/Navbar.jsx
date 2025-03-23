import './Navbar.css';

export let Navbar = (props) => {
  return (
    <div className="navbarborderbox">
      <div className="nacbarheadingdiv">{props.heading}</div>
    </div>
  );
};
