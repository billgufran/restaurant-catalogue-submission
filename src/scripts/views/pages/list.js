import RestaurantDataSource from '../../data/restaurant-api-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
	  <div id="hero" class="hero">
      <picture>
        <source media="(max-width: 600px)" type="image/jpeg" srcset="./images/heros/hero-image_2-mobile.jpg">
        <source media="(max-width: 600px)" type="image/webp" srcset="./images/heros/hero-image_2-mobile.webp">
        <source type="image/webp" srcset="./images/heros/hero-image_2-desktop.webp">
        <source type="image/jpeg" srcset="./images/heros/hero-image_2-desktop.jpg">
        <img src="./images/heros/hero-image_2-desktop.jpg">
      </picture>
      <div class="hero__inner">
        <h1 class="hero__title">
          Bingung mau makan di mana?
        </h1>
        <p class="hero__tagline">
          Langsung aja cek di KANMAKAN! Temukan tempat makan baru favorit kamu sekarang.
        </p>
      </div>
	  </div>
    <div id="main-content" class="content">
      <h2 class="content__heading">Discover</h2>
      <div id="restaurant-list" class="list">

      </div>
    </div>
    `;
  },

  async afterRender() {
    // const $hero = document.querySelector('#hero');
    const $restaurants = document.querySelector('#restaurant-list');

    const { restaurants } = await RestaurantDataSource.restaurantList();

    // $hero.innerHTML = createHeroElementTemplate();

    restaurants.forEach(
      async ({
        id, name, city, rating, description, pictureId,
      }) => {
        const imageSource =					await RestaurantDataSource.restaurantImageSmall(pictureId);
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
  },
};

export default RestaurantList;
