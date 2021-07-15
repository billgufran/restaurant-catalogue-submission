import 'lazysizes';

const createHeroElementTemplate = () => `
   <div class="hero__inner">
      <h1 class="hero__title">
         Bingung mau makan di mana?
      </h1>
      <p class="hero__tagline">
         Langsung aja cek di KANMAKAN! Temukan tempat makan baru favorit kamu sekarang.
      </p>
   </div>
`;

const createEmptyRestaurantListTemplate = () => `
<div class="list--empty">Oops, tidak ada daftar restoran untuk ditampilkan</div>
`;

const createRestaurantItemTemplate = ({
  id,
  imageSource,
  name,
  city,
  description,
  rating,
}) => {
  const ratingPercentage = (rating / 5) * 100;
  const template = `
<article class="list-item">
   <img
      class="list-item__thumbnail lazyload"
      data-src=${imageSource.url}
      alt="restaurant picture"
   />
   <div class="list-item__content">
   <h1 class="list-item__title">
      <a href="${`/#/detail/${id}`}" aria-label="restaurant name">${name}</a>
   </h1>
   <div class="list-item__info">
      <span
         style="background: linear-gradient(90deg, hsl(44, 97%, 49%) ${ratingPercentage}%, hsl(0, 0%, 82%) ${
  100 - ratingPercentage
}%);"
      >&starf; &starf; &starf; &starf; &starf;</span>
      <p>${rating}</p>
      &nbsp;&bull;&nbsp;
      <p>${city}</p>
   </div>
   <p class="list-item__description">
      ${description}
   </p>
   </div>
</article>
   `;
  return template;
};

const createRestaurantDetailTemplate = ({
  name,
  address,
  city,
  rating,
  categories,
  imageSource,
}) => {
  const categoryTag = () => categories
    .map((category) => `
          <span class="restaurant__category">${category.name}</span>
         `)
    .join('');

  const template = `
   <img class="restaurant__image lazyload" data-src="${imageSource.url}" alt="${name}" />
   <div class="restaurant__info">
      <h3>About this place</h3>
      <h4>Address</h4>
      <p>${address}, ${city}</p>
      <h4>Rating</h4>
      <p>${rating}</p>
      <h4>Category</h4>
      <div class="restaurant__categories">
         ${categoryTag()}
      </div>
   </div>
 `;
  return template;
};

const createRestaurantMenuTemplate = (menus) => {
  const foodMenu = menus.foods
    .map((menu) => `
         <li>${menu.name}</li>
      `)
    .join('');

  const drinkMenu = menus.drinks
    .map((menu) => `
         <li>${menu.name}</li>
      `)
    .join('');

  return `
      <h3>Menu</h3>
      <dl>
         <dt>
            <p>Foods</p>
            <ul id="food-menu">${foodMenu}</ul>
         </dt>
         <dt>
            <p>Drinks</p>
            <ul id="drink-menu">${drinkMenu}</ul>
         </dt>
      </dl>
   `;
};

const createCustomerReviewTemplate = (reviews) => {
  const customerReview = reviews
    .map(
      (review) => `
      <article class="customer-review">
      <i class="fa fa-user-circle fa-2x customer-review__avatar" aria-hidden="true">
      </i>
      <div class="customer-review__header">
         <p class="customer-review__name">${review.name}</p>
         <p class="customer-review__date">${review.date}</p>
      </div>
         <p class="customer-review__review">${review.review}</p>
      </article>
   `,
    )
    .join('');

  return `
      <h3>Reviews</h3>
      <div id="customer-reviews-container">${customerReview}</div>
   `;
};

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="like-button" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="like-button" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createHeroElementTemplate,
  createEmptyRestaurantListTemplate,
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantMenuTemplate,
  createCustomerReviewTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
