/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'

/* ------------------------- Internal Dependencies -------------------------- */
import { BackgroundImage } from 'atomic'
/* --------------------------- Styled CardShapess ---------------------------- */
const Card = styled.div`

`
  const Header = styled.div`

  `
  const Main = styled.div`
    background-color: #FFF;
  `
/* ------------------------------- CardShapes -------------------------------- */
const CardShapes = props => (
  <Card {...props}>
    <Header>  </Header>
    <Main>{props.children}</Main>
  </Card>
)

/* ---------------------------- Export Package ------------------------------ */
export default CardShapes