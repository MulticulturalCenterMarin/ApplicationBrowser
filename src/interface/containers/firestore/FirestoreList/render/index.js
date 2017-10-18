/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
import styled from 'styled-components'

/* ------------------------- Internal Dependencies -------------------------- */
import { Flex } from 'particles'
import Foundry from 'foundry'

/* --------------------------- Styled Components ---------------------------- */
const Wrapper = styled.div``

/* ------------------------- Component Properties --------------------------- */

/* ------------------------------- Component -------------------------------- */

let itemApplyStyle = _.curry((layout,user)=> ({...user,...layout}))
/* ---------------------------- Module Package ------------------------------ */
const FirestoreList = ({data, foundry, itemStyled}) => {
  const ListStyled = data ? _.map(data, _.curry(itemApplyStyle)(itemStyled)) : null;
  const ListFoundry = data && ListStyled ? _.map(ListStyled, Foundry[foundry]) : null
  return (
    <Flex direction={['row']} wrap='wrap'>
      {ListFoundry}
    </Flex>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default FirestoreList