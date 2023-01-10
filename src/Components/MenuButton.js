import styled, { css } from 'styled-components'
export const MenuButton = styled.button`
  height: 50px;
  width: 130px;
  background-color: #ba2329;
  color: var(--clr-primary);
  border: 3px solid var(--clr-primary);
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 20px;
  font-family: 'Times New Roman', Times, serif;
  font-size: medium;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: var(--clr-hover);
  }

  ${(props) =>
    props.selected &&
    css`
      background-color: var(--clr-primary);
      color: #c16757;
      border: 3px solid #ba2329;
      &:hover {
        background-color: var(--clr-primary);
      }
    `}
`
