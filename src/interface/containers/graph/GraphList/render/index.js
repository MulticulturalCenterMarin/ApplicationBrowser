/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import query from 'apollo/query/UsersEssentials.gql'
import { Flex } from 'particles'
import { UserProfile } from 'foundry'
import Foundry from 'foundry'
/* ------------------------ Initialize Dependencies ------------------------- */
let itemApplyStyle = _.curry((layout,user)=> ({...user,...layout}))
/* ---------------------------- Module Package ------------------------------ */
const ListQuery = ({data, foundry, itemStyled}) => {
  const ListStyled = data && data.items ? _.map(data.items, _.curry(itemApplyStyle)(itemStyled)) : null;
  const ListFoundry = data && data.items && ListStyled ? _.map(ListStyled, Foundry[foundry]) : null
  return (
    <Flex direction={['row']} wrap='wrap'>
      {ListFoundry}
    </Flex>
  )
}
/* ---------------------------- Export Package ------------------------------ */
export default ListQuery
