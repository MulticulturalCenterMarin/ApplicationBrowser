/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
import styled from 'styled-components'

/* ------------------------- Internal Dependencies -------------------------- */
import { Flex } from 'particles'
import Foundry from 'foundry'

/* --------------------------- Styled Components ---------------------------- */
let itemApplyStyle = _.curry((layout,user)=> ({...user,...layout}))

/* ---------------------------- Module Package ------------------------------ */
export default ({data, foundry, styled}) => {
  const ListStyled = data ? _.map(data, _.curry(itemApplyStyle)(styled.item)) : null;
  const ListFoundry = data && ListStyled ? _.map(ListStyled, Foundry[foundry]) : null
  return (
    <Flex direction={['row']} wrap='wrap' {...styled.wrapper} >
      {ListFoundry}
    </Flex>
  )
}