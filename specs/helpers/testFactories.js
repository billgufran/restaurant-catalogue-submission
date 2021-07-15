import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurant,
  });
};

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

export { createLikeButtonWithRestaurant, addLikeButtonContainer };
