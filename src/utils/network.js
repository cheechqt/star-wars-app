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
export const getApiResponse = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error("Could not fetch.", response.status);
      return false;
    }

    return await response.json();
  } catch (err) {
    console.error("Could not fetch.", err.message);
    return false;
  }
}
