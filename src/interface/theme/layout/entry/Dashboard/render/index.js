// @flow
/* ------------------------- External Dependencies -------------------------- */
import React, { Component } from 'react'
import styled from 'styled-components'
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
import { Absolute, Flex, Box } from 'particles'

/* --------------------------- Child Components ----------------------------- */
/*--- Zones ---*/
import { DashboardHeader, DashboardMain, DashboardAside, DashboardMainPanelRight } from 'layout/zones'
import {DashboardMainPanelLeft, DashboardMainContent} from 'theme/layout/zones'
/*--- Routes ---*/
import {
  DashboardMainRoutes,
  DashboardHeaderRoutes,
  DashboardAsideRoutes,
  DashboardMainPanelLeftRoutes,
  DashboardMainPanelRightRoutes,
} from 'store/routes'
/* --------------------------- Styled Components ---------------------------- */
const DashboardWrapper = styled.div`
  bottom: 0 ; left: 0; top: 0; bottom: 0;
  height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;
`

/* ---------------------------- Module Package ------------------------------ */
const LayoutDashboard = props => {
    /**
     * Extract Zone layouts/positioning from the parent LayoutDashboard container.
     * Each Zone has access to generalized Redux store Actions/Selectors for state
     * updates, refreshes, requests, etc...
     */
    const { zones, header, main, aside } = props;
    return (
          <Absolute left right top bottom of='hidden' >
            {/* Header Zone */}
            {!zones.header ? null: (
              <DashboardHeader {...header.layout} >
                <DashboardHeaderRoutes/>
              </DashboardHeader>
            )}


            {/* Main Zone */}
            {!zones.main ? null: (
              <DashboardMain {...main.layout}>
                {!zones.panelLeft 
                  ? null 
                  :<DashboardMainPanelLeft {...main.regions.panelLeft.layout}>
                    <PerfectScrollbar>
                      <DashboardMainPanelLeftRoutes/>
                    </PerfectScrollbar> 
                  </DashboardMainPanelLeft>}
                {!zones.mainContent 
                  ? null 
                  :<DashboardMainContent {...main.regions.content.layout}>
                    <PerfectScrollbar>
                      <DashboardMainRoutes/>
                    </PerfectScrollbar> 
                  </DashboardMainContent>}
                {!zones.panelRight 
                  ? null 
                  :<DashboardMainPanelRight {...main.regions.panelRight.layout}>
                    <PerfectScrollbar>
                      <DashboardMainPanelRightRoutes/>
                    </PerfectScrollbar> 
                  </DashboardMainPanelRight>}
              </DashboardMain>
            )}

            {/* Aside Zone */}
            {!zones.aside ? null :(
              <DashboardAside {...aside.layout}>
                <PerfectScrollbar >
                  <DashboardAsideRoutes/>
                </PerfectScrollbar>
              </DashboardAside>
            )}
          </Absolute>
    );
}

export default LayoutDashboard;
