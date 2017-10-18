/* ------------------------- External Dependencies -------------------------- */
import React, { Component } from 'react';
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import Dialog from 'material-ui/Dialog';
/* ------------------------- Internal Dependencies -------------------------- */
import COMPONENT_CATALOG from 'library'

/* --------------------------- Styled Components ---------------------------- */
const ComponentWrapper = styled.div`
  position: relative;
  z-index: 999999;
`
/* ------------------------ Initialize Dependencies ------------------------- */

/* ------------------------------- Component -------------------------------- */
const DialogFactory = (props) => {
  // Extract Properties | Destructure
  const { dialog, dialogClose} = props
  const { dialogType, dialogProps } = dialog

  // IF a dialogType exists in the Redux Store Department dialog, SHOW the DialogPrimitive wrapper
  let toggle = dialogType ? true : false
  
  // IF a dialogType exists in the Redux Store Department dialog, HIDE the DialogAssembled wrapper
  if(!toggle) return null

  // Generate DialogAssembled by matching Redux Store Depmartment dialog.dialogType with Dialog Catalog options.
  const DialogAssembled = COMPONENT_CATALOG[dialogType]

  /*--- Settings Dialog ---*/
  const DialogSettings = {
    title:dialogProps.title ? dialogProps.title : null ,
    autoScrollBodyContent:true,
    modal:false,
    open:toggle,
    onRequestClose:props.dialogClose,
  }

  return (
    <ComponentWrapper {...props}>
      <Dialog {...DialogSettings} >
        <DialogAssembled/>
      </Dialog>
    </ComponentWrapper>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default DialogFactory
