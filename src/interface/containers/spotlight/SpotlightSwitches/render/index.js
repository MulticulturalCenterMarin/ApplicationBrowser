/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'

/* ------------------------- Internal Dependencies -------------------------- */
import ListItemIcon from 'molecules/ListItemIcon'
import IconAnalysis from 'assets/icons/design/analysis.png'
/* --------------------------- Styled Components ---------------------------- */
const SpotlightSwitchesWrapper = styled.div`

`
/* ------------------------- Component Properties --------------------------- */

/* ------------------------------- Component -------------------------------- */
const SpotlightSwitches = (props) => {
  const { renderTree, focusChange } = props
  const Component = renderTree && renderTree.type || null
  return (
    <SpotlightSwitchesWrapper>
      { !renderTree ? null : renderTree.items.map( (item)=> <Component onMouseOver={()=> focusChange(item.spotlight, item.id) } {...item} /> )}
    </SpotlightSwitchesWrapper>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default SpotlightSwitches