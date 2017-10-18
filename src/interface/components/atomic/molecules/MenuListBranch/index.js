/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import styled from 'styled-components'
import { Absolute, Flex, Box } from 'rebass'
import { Grid } from 'grid-styled'
import SVGInline from "react-svg-inline"

/* ------------------------- Internal Dependencies -------------------------- */
/*--- CSS ---*/
import bgm from 'theme/stylesheet/background/BackgroundGradient'

/*--- Icons ---*/
import OverviewIcon from 'assets/icons/overview.svg'
import IconBuild from 'assets/icons/pt-icon-build.svg'
import IconComparison from 'assets/icons/pt-icon-comparison.svg'
import IconContrast from 'assets/icons/pt-icon-contrast.svg'
import IconCog from 'assets/icons/pt-icon-cog.svg'
import IconCode from 'assets/icons/pt-icon-code.svg'
import IconCodeBlock from 'assets/icons/pt-icon-code-block.svg'
/* --------------------------- Styled Components ---------------------------- */
import {Heading, MenuListBranchLeaf, MenuListBranchHeading } from 'atomic'

const SidebarZoneWrapper = styled.aside`

`
const SidebarStyledWrapper = styled(Absolute)`
  background-color: #394a5a;
  box-shadow: 0 2px 21px 0 rgba(0, 0, 0, 0.1), 4px 3px 20px 0px rgba(0, 0, 0, 0.58);
`

const BoxMagic = styled(Box)`
  
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  &:active {
    background: #606c88;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #3f4c6b, #606c88);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #3f4c6b, #606c88); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
`
const FlexMagic = styled(Flex)`

  
  &:hover {
    background: #808080;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #394b5b, #808080);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #394b5b, #394b5b, #435865); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    ${bgm}
  }

  &:active {
    background: #808080;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #394b5b, #808080);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #394b5b, #394b5b, #435865); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    ${bgm}
  }
`

/* --------------------------- Styled Components ---------------------------- */
const ComponentWrapper = styled.div`

`

/* ------------------------- Component Properties --------------------------- */
ComponentWrapper.propTypes = {

}

/* ------------------------------- Component -------------------------------- */
const Component = ({ ...props }) => {
  const title = props.title
  const tagline = props.tagline
  const leafs = props.leafs
  return (
    <ComponentWrapper {...props}>
      <MenuListBranchHeading title="Overview" title={title} tagline={tagline} icon={IconComparison} />
      <hr/>
      <Grid w={['100%']} >
        {leafs.map((leaf, i) => <MenuListBranchLeaf key={i} {...leaf} /> )}
      </Grid>
    </ComponentWrapper>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default Component