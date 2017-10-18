// @flow
/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Absolute, Box } from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import { SiteMainRoutes, SiteHeaderRoutes } from 'store/routes'
import { SiteHeader, SiteMain, SiteFooter } from 'layout/zones'
import { BlockBranding, BlockTop }  from 'workshop/blocks'
import { Footer}  from 'workshop/zones'
/* ---------------------------- Module Package ------------------------------ */
export default props => (
<Absolute left right top bottom>
<BlockBranding/>
  
  {/* Header Zone */}
  {!props.zones.header ? null: (
    <SiteHeader {...props.header.layout} >
      <SiteHeaderRoutes/>
    </SiteHeader>
  )}


  {/* Main Zone */}
  {!props.zones.main ? null: (
    <SiteMain {...props.main.layout}>
      <SiteMainRoutes/>
    </SiteMain>
  )}

  {/* Footer Zone */}
  {!props.zones.footer ? null :(
    <SiteFooter {...props.footer.layout}>
      <Footer/>
    </SiteFooter>
  )}
</Absolute>)

