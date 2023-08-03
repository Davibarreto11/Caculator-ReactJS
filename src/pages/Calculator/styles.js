import { styled, css } from 'styled-components';

export const Juntrobom = styled.div`
  border-radius: 5px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
`;

const colors = {
  default: css`
    background: #ccc;

    &:hover {
      background: #ccc;
    }
  `,
  operation: css`
    background:  #fa8231cc;

    &:hover {
      background:  #fa8231cc;
    }
  `,
};

const sizes = {
  default: css`
    grid-column: span 1;
  `,
  double: css`
    grid-column: span 2;
  `,
  triple: css`
    grid-column: span 3;
  `,
};

export const Button = styled.button.attrs({
  type: 'button',
})`
  font-size: 1.4em;
  background-color:  #f0f0f0;
  border: none;
  border-right: solid 1px #888;
  border-bottom: solid 1px #888;
  outline: none;

  ${(props) => sizes[props.size || 'default']}
  ${(props) => colors[props.color || 'default']}
`;

export const Container = styled.div`
  height: auto;
  width: 260px;
  border-radius: 5px;
  overflow: hidden;
`;

export const Display = styled.div`
  grid-column: span 4;
  background-color: #0004;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  font-size: 2.1em;
  overflow: hidden;
`;
