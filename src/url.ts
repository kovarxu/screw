import {
    isStringMap,
    isPlainObject,
} from './is';
import { PlainObject } from 'types/index';

/**
 * @description: see example
 * @example: {name: 东方仗助, age: 18} => 'name=%E4%B8%9C%E6%96%B9%E4%BB%97%E5%8A%A9&age=18'
 * @param {options: object} can be a plain object or a Map<string|number, any>
 * @return: string
 */
export const linkQuery = (options: any) => {
    if (isStringMap(options)) {
        const slist = [];
        for (let option of options) {
            const [key, value] = option;
            slist.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        }
        return slist.join('&');
    }
    if (isPlainObject(options)) {
        const slist = Object.keys(options).map(key => {
            return `${encodeURIComponent(key)}=${encodeURIComponent(options[key])}`;
        })
        return slist.join('&');
    }
    return '';
}

/**
 * @description: link the existing url and additional query options
 * @example: 
 * @param {url: string} 
 * @param {key: string} 
 * @param {value: string} 
 * @return: string
 */
export const appendQuery = (url: string, key: string | PlainObject, value?: string) => {
    let options = key;
    if (typeof options == 'string') {
        options = {};
        options[key as string] = value;
    }

    const additionQueryString = linkQuery(options);
    if (additionQueryString === '') {
        // do nothing
    } else if (url.indexOf('?') >= 0) {
        url += '&' + additionQueryString
    } else {
        url += '?' + additionQueryString
    }
    return url;
}
