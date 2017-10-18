/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
import styled from 'styled-components'
import { Flex} from 'particles'
import { responsiveStyle } from 'quarks'
/* ------------------------- Internal Dependencies -------------------------- */

/* --------------------------- Styled Components ---------------------------- */
const Wrapper = styled(Flex)`

`
/* ------------------------------- Component -------------------------------- */
const ItemListWrapper = props => (
  <Wrapper {...props}>
    {props.children}
  </Wrapper>
)
/* ------------------------- Component Properties --------------------------- */
ItemListWrapper.defaultProps = {
  align: 'strech',
}


/* ---------------------------- Export Package ------------------------------ */
export default ItemListWrapper