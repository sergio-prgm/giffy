import { Link as LinkWouter } from 'wouter'
import styled from '@emotion/styled'

export const Link = styled(LinkWouter)`
  border: 1px solid-transparent;
  padding: .5rem 1rem;
  background-color: var(--brand-color_3);
  color: var(--theme-body-txt);
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: var(--brand-color_1)
  }

  [disabled] {
    opacity: .3;
    pointer-events: none;
  }
`

export const Button = Link.withComponent('button')
