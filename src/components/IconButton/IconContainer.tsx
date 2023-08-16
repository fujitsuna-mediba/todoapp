import React, { ReactNode, ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

type IconContainerProps = {
  children: ReactNode
  color?: string
  onClick?: () => void
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>

const defaultColor = '#A66C6C'

const IconContainer: React.FC<IconContainerProps> = ({ children, color = defaultColor, onClick, ...buttonProps }) => {
  const hoverColor = `${color}33`
  const activeColor = `${color}66`

  return (
    <IconContainerBox
      color={color}
      hoverColor={hoverColor}
      activeColor={activeColor}
      onClick={onClick}
      {...buttonProps}>
      {children}
    </IconContainerBox>
  )
}

export default IconContainer

const IconContainerBox = styled.button<{
  color: string
  hoverColor: string
  activeColor: string
}>`
  color: ${props => props.color};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: opacity 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: solid 1px #eceae6;

  &:focus {
    border: solid 1px #9a2e2e;
  }

  &:hover {
    background: ${props => props.hoverColor};
  }

  &:active {
    background: ${props => props.activeColor};
  }
`
