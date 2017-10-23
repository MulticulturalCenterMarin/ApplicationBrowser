/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Box, Flex } from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import ReduxField from 'organisms/ReduxField'

/* ---------------------------- Module Package ------------------------------ */
export default props => (
  <Flex {...props.styledWrapper} >
    <Box {...props.styledFieldOuter} >
      <Field 
        name="nameProject"
        placeholder="Project Name"
        component={ReduxField}
        type="text"
        color='blue'
        mh={50}
        f={[4]}
        fw='700'
        {...props.styledField}
        {...props}
      />
    </Box>
    <Box {...props.styledFieldOuter} >
      <Field
        name="nameProjectAlias"
        placeholder="Alias (Codename)"
        component={ReduxField}
        type="text"
        color='gray' 
        mh={30}
        f={[1]}
        {...props.styledField}
        {...props}
      />
    </Box>
  </Flex>
)