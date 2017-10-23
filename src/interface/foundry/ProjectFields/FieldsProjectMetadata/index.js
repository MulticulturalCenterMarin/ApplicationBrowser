/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import { Flex, Box, ReduxField } from 'atomic'

/* ---------------------------- Module Package ------------------------------ */
export default props => (
  <Flex direction={['column']} justify="space-evenly" wrap='wrap' {...props.styledWrapper} >
    <Box {...props.styledFieldOuter}>
      <Field name="metaProjectURL" placeholder="Project URL" component={ReduxField} type="text" {...props} {...props.styledField}/>
    </Box>
    <Box {...props.styledFieldOuter}>
      <Field name="metaRepoURL" placeholder="Repository URL" component={ReduxField} type="text"  {...props} {...props.styledField}/>
    </Box>
    <Box {...props.styledFieldOuter}>
      <Field name="metaVideoURL" placeholder="Video URL (Youtube)" component={ReduxField} type="text" {...props.styledField}/>
    </Box>
  </Flex>
)