import {
  HTTP, HTTPS, SWAPI_PEOPLE, SWAPI_ROOT,
  GUIDE_IMG_EXTENSION, URL_IMG_PERSON
} from "@constants/api.js";

export const getPeopleId = url => getId(url, SWAPI_PEOPLE);

export const getPeopleImage = id => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`;

const checkProtocol = url => {
  if (url.indexOf(HTTPS) !== -1) {
    return HTTPS
  }
  return HTTP
}

const getId = (url, category) => {
  const protocol = checkProtocol(url);

  const id = url
    .replace(protocol + SWAPI_ROOT + category, '')
    .replace(/\//g, '');
  return id;
}



