import styled, { css } from "styled-components";

const Container = styled.article`
  margin-bottom: 24px;
  ${({ removed }) => css`
    opacity: ${removed ? 0.3 : 1};
    color: ${removed ? "#F00" : "#000"};
  `};
`;

const Subtitle = styled.small`
  display: block;
`;

const Rate = styled.span`
  font-size: 10px;
  opacity: 0.7;
`;

export { Container, Subtitle, Rate };
