import styled, {css} from "styled-components"

export const Title = styled.h2`
  font-size: 2em;
  text-align: center;
  margin-bottom: .5em;
  ${({color}) => color && css`
    color: var(--${color});
  `}
`

export const Par = styled.p`
    font-size: 1em;
    font-weight: 500;
    margin: ${props => props.margin || '0 0 1em 0'};
    line-height: 1.5; 

    ${props => !props.margin && css`
      &:last-child {
        margin: 0 0 0 0;
      }
    `}

    ${props => props.color && css`color: var(--${props.color});`}
    
    & a {
      text-decoration: none;
      color: var(--${props => props.linkColor || "medium"});

      &:hover {
          font-weight: 600;
      }
  }
`

export const GridContainer = styled.div`
    display: grid;
    grid-gap: 0;
    grid-template-columns: ${({gridTemplate}) => gridTemplate || 'auto'};
    grid-template-rows: 1fr;
    line-height: 1.5;
`

export const GridItem = styled.div`
    grid-column: ${({gridColumn}) => gridColumn || 'span 1'};
`