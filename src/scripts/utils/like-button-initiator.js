import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import {
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _isDataExisted(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurantById(id);
    return !!restaurant;
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isDataExisted(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#like-button');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#like-button');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurantById(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
