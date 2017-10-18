/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { MenuAsideItem } from 'foundry'
import { MenuMain } from 'content/menus'
/* ------------------------------- Component -------------------------------- */
const AsideDrawerMenu = props => <div>{MenuMain.map(item=> <MenuAsideItem {...item}/> )}</div>
AsideDrawerMenu.defaultProps = {}
export default AsideDrawerMenu