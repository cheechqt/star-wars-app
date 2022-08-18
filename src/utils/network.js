import { HTTP, HTTPS } from "@constants/api";

/**
 * Change HTTP to HTTPS
 * @param {String} url 
 * @returns {String} 
 * 
 */
export const changeHTTP = url => {
  const result = url ? url.replace(HTTP, HTTPS) : url;

  return result;
}

/** 
 * Send fetch
 * @param {String} url 
 * @returns {Promise}
 */
export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error('Could not fetch.', res.status);
      return false;
    }

    return await res.json();
  } catch (error) {
    console.error('Could not fetch.', error.message);
    return false;
  }
}

export const makeCurrentRequest = async (url) => {

  const res = await Promise.all(url.map(res => {
    return fetch(res).then(res => res.json())
  }));

  return res;
}
