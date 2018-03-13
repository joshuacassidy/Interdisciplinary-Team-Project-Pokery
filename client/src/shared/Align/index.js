import styled from 'styled-components'
import css from '../../styles/variables.js'
import { darken, lighten } from 'polished'

const Align = styled.div`
  text-align: ${props => props.to === "left"? "left" : null};
  text-align: ${props => props.to === "right"? "right" : null};
`

export default Align