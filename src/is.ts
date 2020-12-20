import {
    PureType,
    PlainObject
} from '../types/index';

/**
  Type Check Methods
 */
export const isString = (target: any): target is String => {
  return Object.prototype.toString.call(target).slice(8, -1) === 'String';
}

export const isNumber = (target: any): target is Number => {
  return Object.prototype.toString.call(target).slice(8, -1) === 'Number';
}

export const isFunction = (target: any): target is Function => {
  return Object.prototype.toString.call(target).slice(8, -1) === 'Function';
}

export const isPureType = (target: any): target is PureType => {
  const type = typeof target;
  return ['number', 'string', 'boolean'].includes(type);
}

export const isPlainObject = (target: any): target is PlainObject => {
  if (target && typeof target === 'object') {
    const keys = Object.keys(target);
    for(let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (!isPureType(target[key])) {
        return false;
      }
    }
    return true;
  }
  return false;
}

export const isArray = (target: any): target is Array<any> => {
  return Object.prototype.toString.call(target).slice(8, -1) === 'Array';
}

export const isRegExp = (target: any): target is RegExp => {
  return Object.prototype.toString.call(target).slice(8, -1) === 'RegExp';
}

export const isSet = (target: any): target is Set<any> => {
  return Object.prototype.toString.call(target).slice(8, -1) === 'Set';
}

export const isMap = (target: any): target is Map<any,any> => {
  return Object.prototype.toString.call(target).slice(8, -1) === 'Map';
}

/**
  RegExp Check Methods
 */

export const isEmail = (s: string): boolean => {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

export const isMobile = (s: string): boolean => {
  return /^1[0-9]{10}$/.test(s)
}

export const isPhone = (s: string): boolean => {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

export const isURL = (s: string): boolean => {
  return /^https?:\/\/.*/.test(s)
}
