import API_ENDPOINT from '../globals/api-endpoint';

const RestaurantDataSource = {
  async restaurantList() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson;
  },
  async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson;
  },
  async restaurantImageSmall(pictureId) {
    const imageURL = await fetch(API_ENDPOINT.IMAGE_SMALL(pictureId));
    return imageURL;
  },
  async restaurantImageMedium(pictureId) {
    const imageURL = await fetch(API_ENDPOINT.IMAGE_MEDIUM(pictureId));
    return imageURL;
  },
  async restaurantImageLarge(pictureId) {
    const imageURL = await fetch(API_ENDPOINT.IMAGE_LARGE(pictureId));
    return imageURL;
  },
};

export default RestaurantDataSource;
