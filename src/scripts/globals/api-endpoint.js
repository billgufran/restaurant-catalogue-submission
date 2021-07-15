import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}/list`,
  REVIEW: `${CONFIG.BASE_URL}/review`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  SEARCH: (query) => `${CONFIG.BASE_URL}/search?q=${query}`,
  IMAGE_SMALL: (pictureId) => `${CONFIG.BASE_URL}/images/small/${pictureId}`,
  IMAGE_MEDIUM: (pictureId) => `${CONFIG.BASE_URL}/images/medium/${pictureId}`,
  IMAGE_LARGE: (pictureId) => `${CONFIG.BASE_URL}/images/large/${pictureId}`,
};

export default API_ENDPOINT;
