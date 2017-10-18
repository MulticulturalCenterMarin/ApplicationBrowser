/* ------------------------- External Dependencies -------------------------- */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import { RadioButton } from 'material-ui/RadioButton'
import { Toggle } from 'redux-form-material-ui'
import styled from 'styled-components'
import styledTheme from 'styled-theme'
import styledTools from 'styled-tools'

/* ------------------------- Internal Dependencies -------------------------- */

/* --------------------------- Styled Components ---------------------------- */
const Wrapper = styled.form`
  display: inline-block;
  float: right;
  width: 250px;
`

const QuestTrackForm = (props) => {

  const { handleSubmit, handleChange, isSubmitting } = props
    return (
      <Wrapper>
        <Field name="sessionDisplay" onClick={ handleChange } component={Toggle} label="Display Session"/>
      </Wrapper>
    )
}

QuestTrackForm.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

export default QuestTrackForm
