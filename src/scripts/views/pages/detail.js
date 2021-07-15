import RestaurantDataSource from '../../data/restaurant-api-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import UrlParser from '../../utils/url-parser';
import {
  createCustomerReviewTemplate,
  createRestaurantDetailTemplate,
  createRestaurantMenuTemplate,
} from '../templates/template-creator';

const RestaurantDetail = {
  async render() {
    return `
		<div id="main-content" class="content">
			<div id="restaurant" class="restaurant">
				<h2 id="restaurant-name" class="restaurant__name"></h2>
				<section id="restaurant-detail" class="restaurant__detail"></section>
				<section id="restaurant-menus" class="restaurant__menus"></section>
				<section id="restaurant-reviews"></section>
			</div>
			<div id="like-button-container"></div>
		</div>
    `;
  },

  async afterRender() {
    const $name = document.querySelector('#restaurant-name');
    const $detail = document.querySelector('#restaurant-detail');
    const $menus = document.querySelector('#restaurant-menus');
    const $reviews = document.querySelector('#restaurant-reviews');
    const $likeButtonContainer = document.querySelector(
      '#like-button-container',
    );

    const { id } = UrlParser.parseActiveUrlWithoutCombiner();

    const { restaurant } = await RestaurantDataSource.restaurantDetail(id);
    const imageSource = await RestaurantDataSource.restaurantImageMedium(
      restaurant.pictureId,
    );

    $name.innerText = restaurant.name;

    $detail.innerHTML = createRestaurantDetailTemplate({
      name: restaurant.name,
      address: restaurant.address,
      city: restaurant.city,
      categories: restaurant.categories,
      rating: restaurant.rating,
      imageSource,
    });

    $menus.innerHTML = createRestaurantMenuTemplate(restaurant.menus);

    $reviews.innerHTML = createCustomerReviewTemplate(
      restaurant.customerReviews,
    );

    LikeButtonInitiator.init({
      likeButtonContainer: $likeButtonContainer,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
      },
    });
  },
};

export default RestaurantDetail;
