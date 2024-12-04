import './Nav.css';

const Nav = ({ leftChild, center, rightChild }) => {
  return (
    <nav className="Nav">
      <div className="nav_logo">{leftChild}</div>
      <div className="nav_center">{center}</div>
      <div className="nav_user">{rightChild}</div>
    </nav>
  );
};

export default Nav;
