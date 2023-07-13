import API_ENDPOINT from './api-endpoint';

class RestaurantSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async restoDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async restaurantFavorite(reviewData) {
    try {
      const requestOption = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      };

      const response = await fetch(API_ENDPOINT.ADD_REVIEW, requestOption);
      const responseJson = await response.json();
      return responseJson.customerReviews;
    } catch (error) {
      console.log('Error:', error);
      throw new Error('Failed to submit review.');
    }
  }

  static getMediumImageUrl(pictureId) {
    return `${API_ENDPOINT.RESTAURANT_IMAGE_MEDIUM(pictureId)}`;
  }
}

export default RestaurantSource;
