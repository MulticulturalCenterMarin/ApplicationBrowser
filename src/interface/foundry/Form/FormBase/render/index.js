import React from 'react'
import { Box } from 'atomic'
const FormBase = props =><Box is="form"
{...props.styledWrapper} {...props} >{props.children}</Box>
FormBase.defaultProps = {
  styledFieldOuter:{
      w:0.6,
      p: 10,
    },
    styledField:{
      w:0.5
    },
    styledInput:{
      w:0.5
    },
    styledWrapper:{
      direction: ['column'],
      w:1,
    },
}

export default FormBase