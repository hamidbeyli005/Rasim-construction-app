import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../stores/theme";
import { HiOutlineMoon } from "react-icons/hi";


function Theme() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);

  const handleChange = () => {
    dispatch(setTheme());
  };

  
   const uncheckedIcon = (
   <HiOutlineMoon></HiOutlineMoon>
  );
  return (
    <div className="switch">
      {/* <div className="theme">{theme == false ? "açıq tema" : "tünd tema"}</div> */}
      <Switch
        offColor="#CCCCCC"
        onColor="#02C902"
        handleDiameter={18}
        height={24}
        width={45}
        uncheckedIcon={uncheckedIcon}
        checkedIcon={false}
        onChange={handleChange}
        checked={theme}
      />
    </div>
  );
}

export default Theme;
