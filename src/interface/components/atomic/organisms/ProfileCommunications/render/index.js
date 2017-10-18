// @flow
/* ------------------------- External Dependencies -------------------------- */
import React, { Component } from 'react';
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
/* ------------------------- Internal Dependencies -------------------------- */

/* --------------------------- Styled Components ---------------------------- */
const StreamWrapper = styled(Flex)`
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  height: 120px;
`

const ActionsWrapper = styled(Flex)`
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  height: 120px;
`


/* ------------------------ Initialize Dependencies ------------------------- */

/* ---------------------------- Module Package ------------------------------ */

class ComponentRender extends Component {
  render() {

    return (
      <div>
        <StreamWrapper bg="white" direction={['column', 'row']} mb={['20px']} justify="center" align="center" >
          <Box w={[0.3]} > Action Stream 1 </Box>
          <Box w={[0.3]} > Action Stream 2 </Box>
          <Box w={[0.3]} > Action Stream 3 </Box>
        </StreamWrapper>
        <ActionsWrapper bg="white" direction={['column']} mb={['20px']} justify="center" align="center" >
          <Box w={[0.3]} > Action Stream 1 </Box>
          <Box w={[0.3]} > Action Stream 2 </Box>
          <Box w={[0.3]} > Action Stream 3 </Box>
        </ActionsWrapper>
      </div>
    );
  }
}

export default ComponentRender;
