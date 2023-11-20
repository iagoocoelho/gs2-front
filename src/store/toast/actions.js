import { action } from 'typesafe-actions';
import { ToastrTypes } from './types'

export const showToastr = (options) => action(ToastrTypes.SHOW, options);
export const hideToastr = () => action(ToastrTypes.HIDE);