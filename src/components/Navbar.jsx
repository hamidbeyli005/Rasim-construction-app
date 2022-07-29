import React from "react";
import Button from "./Button";
import Socials from "./Socials";
import Theme from "./Theme";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import Drawer from "react-modern-drawer";
import { useWindowWidth } from "@react-hook/window-size";

//import styles 👇
import "react-modern-drawer/dist/index.css";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const onlyWidth = useWindowWidth();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="Navbar">
      <a href="#" className="logo">
        <span>V.</span>Rasim
      </a>
        <a className="cv" href="../../../public/R.Velibeyli-cv.pdf" download>
          CV YÜKLƏ
        </a>

      {onlyWidth < 1250 ? (
        <div className="menu" onClick={toggleDrawer}>
          <Hamburger toggled={isOpen} direction="right"></Hamburger>
        </div>
      ) : null}
      <div className="drawer">
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="bla bla bla"
        >
          <div className="top">
            <Hamburger
              toggled={isOpen}
              toggle={toggleDrawer}
              direction="right"
            ></Hamburger>
            <Theme></Theme>
          </div>
          <div className="icons">
            {" "}
            <Socials></Socials>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/about">Haqqında</NavLink>
              </li>
              <li>
                <NavLink to="/services">Xidmetler</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Layiheler</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Elaqe</NavLink>
              </li>
            </ul>
          </nav>
          
        </Drawer>
      </div>

      {onlyWidth > 1250 ? (
        <>
          {" "}
          <nav>
            <ul>
              <li>
                <NavLink to="/about">Haqqında</NavLink>
              </li>
              <li>
                <NavLink to="/services">Xidmetler</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Layiheler</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Bizimle elaqe</NavLink>
              </li>
            </ul>
          </nav>
        </>
      ) : null}
      <div className="right">
        {onlyWidth > 765 ? (
          <>
            <Theme></Theme>
            <Socials></Socials>
            <Button data="zeng et"></Button>
          </>
        ) : (
          <Theme></Theme>
        )}
      </div>
    </div>
  );
}

export default Navbar;
