import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import RestaurantDataSource from '../../data/restaurant-api-source';
import { createRestaurantItemTemplate, createEmptyRestaurantListTemplate } from '../templates/template-creator';

const FavoriteRestaurantList = {
  async render() {
    return `
     <div id="main-content" class="content">
        <h2 class="content__heading">Your favorites</h2>
        <div id="favorite-restaurants" class="list">

        </div>
      </div>
     `;
  },

  async afterRender() {
    const $restaurants = document.querySelector('#favorite-restaurants');

    const restaurants = await FavoriteRestaurantIdb.getRestaurants();

    if (restaurants.length) {
      restaurants.forEach(
        async ({
          id, name, city, rating, description, pictureId,
        }) => {
          const imageSource = await RestaurantDataSource.restaurantImageSmall(pictureId);
          $restaurants.innerHTML += createRestaurantItemTemplate({
            id,
            imageSource,
            name,
            city,
            description,
            rating,
          });
        },
      );
    } else {
      $restaurants.innerHTML = createEmptyRestaurantListTemplate();
    }
  },
};

export default FavoriteRestaurantList;
