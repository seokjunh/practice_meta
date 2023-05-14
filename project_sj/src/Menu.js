import React from "react";
import { MenuList } from "./MenuList";
import MenuItem from "./MenuItem";
import './style/Menu.css'

function Menu() {
  return (
    <div className="menu">
      <h1 className="menutitle">Plants</h1>
      <div className="menuList">
        {MenuList.map((menuitem, key) => {
          return (
            <MenuItem
              image={menuitem.image}
              name={menuitem.name}
              price={menuitem.price}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Menu;
