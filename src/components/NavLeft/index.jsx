import React, { useState, useEffect } from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import MenuConfig from './../../config/menuConfig';
import './index.less';

const { SubMenu } = Menu;

const NavLeft = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const menuTreeNode = renderMenu(MenuConfig);
    setMenu(menuTreeNode);
  }, [])

  // 菜单渲染
  const renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <Link to={item.key}>{item.title}</Link>
        </Menu.Item>
      )
    })
  }

  return (
    <div>
      <div className="logo">
        <img src="/assets/logo.png" />
        <h1>Bic MS</h1>
      </div>
      <Menu theme="dark">
        {menu}
      </Menu>
    </div>
  );
};
export default NavLeft;