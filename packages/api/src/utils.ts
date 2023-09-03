import { WalineResponse } from './typings.js';

export interface BaseAPIOptions {
  /**
   * Waline 服务端地址
   *
   * Waline serverURL
   */
  serverURL: string;

  /**
   * 错误信息所使用的语言
   *
   * Language used in error text
   */
  lang: string;
}

export const JSON_HEADERS: Record<string, string> = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'Content-Type': 'application/json',
};

export const getFetchPrefix = (serverURL: string): string =>
  `${serverURL.replace(/\/?$/, '/')}api/`;

export const errorCheck = <T>(data: WalineResponse<T>, name = ''): T => {
  if (typeof data === 'object' && data.errno)
    throw new TypeError(`${name} failed with ${data.errno}: ${data.errmsg}`);

  return data.data;
};
