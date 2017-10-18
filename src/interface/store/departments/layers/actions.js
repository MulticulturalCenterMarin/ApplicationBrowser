/* --------------------------- Define Constants ----------------------------- */
export const LAYERS_POPOVER_OPEN = 'LAYERS_POPOVER_OPEN'
export const LAYERS_POPOVER_CLOSE = 'LAYERS_POPOVER_CLOSE'
export const LAYERS_DIALOG_OPEN = 'LAYERS_DIALOG_OPEN'
export const LAYERS_DIALOG_CLOSE = 'LAYERS_DIALOG_CLOSE'

/* ---------------------------- Define Actions ------------------------------ */

/*--- Open Popover ---*/
export const layersPopoverOpen = () => ({
  type: LAYERS_POPOVER_OPEN,
})

/*--- Close Popover ---*/
export const layersPopoverClose = () => ({
  type: LAYERS_POPOVER_CLOSE
})

/*--- Open Dialog ---*/
export const layersDialogOpen = () => ({
  type: LAYERS_DIALOG_OPEN,
})

/*--- Close Dialog ---*/
export const layersDialogClose = () => ({
  type: LAYERS_DIALOG_CLOSE
})
