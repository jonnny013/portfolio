import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";

const NavBar = () => {
  return <div id='header-link'>
    <SocialIcons />
    <Link to='/'>Home</Link>
    <Link to='contact'>Contact</Link>
    <Link to='about'>About Me</Link>
  </div>;
}

export default NavBar