import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Socials from "../components/Socials";
import Theme from "../components/Theme";
import { FiPhoneCall } from "react-icons/fi";
import { useWindowWidth } from "@react-hook/window-size";

function Footer() {
  const onlyWidth = useWindowWidth();
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(onlyWidth < 500 ? true : false);
  }, [onlyWidth]);

  return (
    <div className="Footer">
      <div className="top" style={{ flexDirection: mobile ? "column" : null }}>
        <ul>
          <li>
            <Link to="/about">Haqqında</Link>
          </li>
          <li>
            <Link to="/services">Xidmətlər</Link>
          </li>
          <li>
            <Link to="/projects">Layihələr</Link>
          </li>
          <li>
            <Link to="/contact">Əlaqə</Link>
          </li>
        </ul>
        <ul>
          <li>
            <FiPhoneCall></FiPhoneCall>

            <a href="tel:0557617151">0557617151</a>
          </li>
          <li>
            <FiPhoneCall></FiPhoneCall>

            <a href="tel:0557617151">0557617151</a>
          </li>
        </ul>
        <ul
          style={{
            display: mobile ? "flex" : null,
            alignItems: mobile ? "center" : null,
            justifyContent: mobile ? "space-around" : null,
          }}
        >
          <div>
            <Socials></Socials>
          </div>
          <Theme></Theme>
          <a className="cv" href="../../../public/R.Velibeyli-cv.pdf" download>
          CV YÜKLƏ
        </a>
        </ul>
      </div>

      <div className="bottom" style={{ textAlign: "center" }}>
        <p>
          Copyright © 2022 All rights reserved. Saytın bütün hüquqları müvafiq
          qanunvericiliyə əsasən qorunur.
        </p>
      </div>
    </div>
  );
}

export default Footer;
