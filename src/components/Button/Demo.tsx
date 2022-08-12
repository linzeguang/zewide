/*
 * @Author: linzeguang
 * @Date: 2022-08-12 18:48:38
 * @LastEditTime: 2022-08-12 18:55:38
 * @LastEditors: linzeguang
 * @Description:
 */

import React from 'react';
import type { ButtonProps } from 'zewide';
import { Button } from 'zewide';

const Demo: React.FC<ButtonProps> = (props) => {
  return <Button {...props}>demo</Button>;
};

export default Demo;
