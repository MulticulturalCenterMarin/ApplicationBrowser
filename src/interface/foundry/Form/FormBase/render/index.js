import React from 'react'
import { Box } from 'atomic'
export default props =><Box is="form" {...props.styledWrapper} {...props} >{props.childrenTransformed}</Box>