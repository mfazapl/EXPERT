import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.API_BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.API_BASE_URL}/detail/${id}`,
  ADD_REVIEW: `${CONFIG.API_BASE_URL}/review`,
  RESTAURANT_IMAGE_SMALL: (pictureId) => `${CONFIG.API_BASE_URL}/images/small/${pictureId}`,
  RESTAURANT_IMAGE_MEDIUM: (pictureId) => `${CONFIG.API_BASE_URL}/images/medium/${pictureId}`,
  RESTAURANT_IMAGE_LARGE: (pictureId) => `${CONFIG.API_BASE_URL}/images/large/${pictureId}`,
};

export default API_ENDPOINT;
