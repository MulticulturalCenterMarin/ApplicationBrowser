/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { compose, withProps, lifecycle } from 'recompose'
import { Item } from 'foundry'
/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';

/* ---------------------------- Module Package ------------------------------ */

const queryLifecycle = lifecycle(
{
  /*--- Will Mount ---*/
  componentWillMount(props)
  {

    const defaultFormStyles = {
      styledInput: {
        br:5,
        w: 1,
      },
      styledField: {
        w: 1,
      },
      styledFieldOuter: {
        my: [5],
        w: 1,
      },
      styledWrapper: {
        direction: ['column', 'column', 'row'],
        p: 10,
        wrap:'wrap',
      }
    }
    const styled = this.props.styled || {}
    console.log(styled)
    const tp = this.props
    this.setState({
      childrenTransformed: React.Children.map(this.props.children, function(child) {
        const styledFieldOuter = child.props.styledFieldOuter
        console.log(child.props)
        return child.props.foundry 
        ? <Item foundry={child.props.foundry} 
          {...{...defaultFormStyles.styledFieldOuter, ...styledFieldOuter}} 
          children={React.cloneElement(child, {...defaultFormStyles, ...styled})} />
        : React.cloneElement(child, {...defaultFormStyles, ...styled});
      })
    })
  }
})

export default compose(
  queryLifecycle,
)(Render);

/**
 * @func FormBase
 * @desc Compose Form Props into Children Components
 * @todo Better Render Performance
 */