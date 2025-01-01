import { ModeToggle } from "@/provider/mode-toggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto flex items-center gap-3">
      <Link to="">tasks</Link>
      <Link to="/users">users</Link>
      <div className="ml-auto">
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
};

export default Navbar;
