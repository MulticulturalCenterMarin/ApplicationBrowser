import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { palette } from 'styled-theme'

import {List, ListItem} from 'material-ui/List';
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionExtension from 'material-ui/svg-icons/action/extension';
import ActionFindReplace from 'material-ui/svg-icons/action/find-replace';
import ActionSettingsInputComposite from 'material-ui/svg-icons/action/settings-input-composite';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import DeviceStorage from 'material-ui/svg-icons/device/storage';
import DeviceWidgets from 'material-ui/svg-icons/device/widgets';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Subheader from 'material-ui/Subheader';

const Nav = styled.nav`
  color: #3e3e3e;
  display: inline-block;
  list-style: none;
  width: 100%;

  a {
    font-weight: 300;
    color: ${palette('#3e3e3e', 0)};
    font-size: 1.45rem;
    font-weight: bold;
    &.active {
      color: ${palette('#3e3e3e', 0)};
    }
  }
`

const ListItemStyle = {
  color: "#3e3e3e",
  "font-family": "Raleway"
}

const SidebarNavigation = (props) => {
  return (
    <Nav {...props}>
      <Subheader style={{color: "#3e3e3e"}} >Campaign</Subheader>
      <Divider />
      <List>
        <Link to="/">
          <ListItem
            style={ListItemStyle}
            innerDivStyle={ListItemStyle}
            primaryText="Dashboard"
            rightIcon={<ActionDashboard color={"rgba(35, 116, 224, 0.84)"}/>}
          />
          </Link>
          <Link to={"/campaign/add"}>
            <ListItem
              style={ListItemStyle}
              innerDivStyle={ListItemStyle}
              primaryText="Add"
              rightIcon={<DeviceWidgets color={"rgba(35, 116, 224, 0.84)"} />}
            />
          </Link>
      </List>
      <Subheader style={{color: "#3e3e3e"}} >Settings</Subheader>
      <Divider />
      <List>
        <Link to="/settings">
          <ListItem
            style={ListItemStyle}
            innerDivStyle={ListItemStyle}
            primaryText="API"
            rightIcon={<ActionSettingsInputComposite color={"rgba(35, 116, 224, 0.84)"} />}
          />
        </Link>
      </List>
    </Nav>
  )
}

SidebarNavigation.propTypes = {
  reverse: PropTypes.bool,
}

export default SidebarNavigation
