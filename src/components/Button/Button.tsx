/*
 * @Author: linzeguang
 * @Date: 2022-08-13 02:30:44
 * @LastEditTime: 2022-08-14 15:30:52
 * @LastEditors: linzeguang
 * @Description: Button 组件
 */

import React from 'react';
import styled from 'styled-components';

import type { ButtonProps } from './types';

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${(props) =>
    props.size === 'small'
      ? '7px 25px 8px'
      : props.size === 'medium'
      ? '9px 30px 11px'
      : '14px 30px 16px'};
  color: ${(props) => (props.primary ? '#1b116e' : '#ffffff')};
  background-color: ${(props) => (props.primary ? '#6bedb5' : '#1b116e')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  &:hover {
    background-color: ${(props) => (props.primary ? '#55bd90' : '#6bedb5')};
  }
  &:active {
    padding: ${(props) =>
      props.size === 'small'
        ? '5px 23px 6px'
        : props.size === 'medium'
        ? '7px 28px 9px'
        : '12px 28px 14px'};
    border: solid 2px #1b116e;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  text,
  primary,
  disabled,
  size,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}
    >
      {text}
    </StyledButton>
  );
};
