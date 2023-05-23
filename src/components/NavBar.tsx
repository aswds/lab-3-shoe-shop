import React from "react";
import navbarStyles from "./NavBar.module.css";
import { Link } from "react-router-dom";
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className={navbarStyles.container}>
      <div className={navbarStyles.shopButtonContainer}>
        <Link className={navbarStyles.shopButton} to={"/"}>
          Product shop
        </Link>
      </div>
      <div className={navbarStyles.buttonsContainer}>
        <Link
          hrefLang=""
          to={""}
          title="Sign Up"
          className={navbarStyles.button}
        >
          Sign up
        </Link>

        <Link
          hrefLang=""
          to={"/addProduct"}
          title="Add Product"
          className={navbarStyles.button}
        >
          Add Product
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
