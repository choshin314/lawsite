import styled, {css} from "styled-components"

export const Button = styled.button`
    cursor: pointer;
    padding: 0.5em 1em;
    border-radius: 5px;
    font-weight: bold;
    font-size: ${props => props.size ? `var(--${props.size})` : '1.3em'};
    transition: all .2s ease-in-out;
    background: ${props => props.primary ? 'var(--primary)' : 'var(--white)'};
    color: ${props => props.primary ? 'var(--white)' : 'var(--primary)'};
    border: ${props => props.primary ? 'var(--white)' : 'var(--primary)'} 1.5px solid;

    &:hover {
        transform: scale(1.05);
        border: transparent 1.5px solid;
    }
`
export const Divider = styled.span`
    display: block;
    margin: 1em auto;
    width: 50%;
    max-width: 20rem;
    overflow: hidden;

    & hr {
        border: var(--accent) solid 3px;
        border-radius: 2px;
    }
`

export const Title = styled.h2`
  font-size: 2em;
  text-align: center;
  margin-bottom: .5em;
  color: var(--primary);
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
      color: var(--${props => props.linkColor || "dark"});

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