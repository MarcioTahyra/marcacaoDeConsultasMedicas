import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import theme from '../styles/theme';

export const HeaderContainer = styled.View`
  background-color: ${theme.colors.primary};
  padding-top: ${StatusBar.currentHeight}px;
  padding: ${theme.spacing.medium}px;
  elevation: 4;
  shadow-color: #000;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  shadow-offset: 0px 2px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; /* Empurra o título para a esquerda e o switch para a direita */
  padding: ${theme.spacing.medium}px;
`;

export const HeaderTitle = styled.Text`
  color: ${theme.colors.white};
  font-size: ${theme.typography.title.fontSize}px;
  font-weight: ${theme.typography.title.fontWeight};
`;