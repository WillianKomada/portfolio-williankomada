import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkStylesProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border-bottom: 2px solid ${({ theme }) => theme.backgroundLight};

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;

export const NavLinkContainer = styled.li<NavLinkStylesProps>`
  a {
    text-transform: uppercase;
    color: ${props =>
      props.isActive ? props.theme.primary : props.theme.textHighlight};
    transition: 0.5s;

    &:hover {
      color: ${props =>
        props.isActive
          ? lighten(0.3, props.theme.primary)
          : lighten(0.3, props.theme.textHighlight)};
    }
  }
`;
