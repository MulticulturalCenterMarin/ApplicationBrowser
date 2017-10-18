/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import Popover from 'react-popover'
/* ------------------------- Internal Dependencies -------------------------- */
import { Absolute, Flex, Box } from 'particles'
import {Heading, Image, Paragraph, Container, Section} from 'atomic'
/* --------------------------- Styled Components ---------------------------- */
const Wrapper = styled.div``

/* ------------------------- Component Properties --------------------------- */

/* ------------------------------- Component -------------------------------- */
export default (props) =>(
<Wrapper>
    <Popover
    isOpen={props.openNow}
    place={props.place || 'below'}
    preferPlace={props.preferPlace || 'below'}
    body={props.body}
    tipSize={0.1}
    onOuterAction={() => props.togglePopover(n => n = n ? false : true)}
  >
    <div onClick={() => props.togglePopover(n => n = n ? false : true)}>
    {props.children}
    </div>
  </Popover>
</Wrapper>
)