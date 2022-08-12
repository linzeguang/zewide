/*
 * @Author: linzeguang
 * @Date: 2022-08-13 03:00:42
 * @LastEditTime: 2022-08-13 03:00:45
 * @LastEditors: linzeguang
 * @Description:
 */
import { MouseEventHandler } from "react";

export interface ButtonProps {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
