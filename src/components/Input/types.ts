/*
 * @Author: linzeguang
 * @Date: 2022-08-13 03:01:44
 * @LastEditTime: 2022-08-13 03:01:47
 * @LastEditors: linzeguang
 * @Description:
 */
import type { ChangeEventHandler } from "react";

export interface InputProps {
  id?: string;
  label?: string;
  error?: boolean;
  message?: string;
  success?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
