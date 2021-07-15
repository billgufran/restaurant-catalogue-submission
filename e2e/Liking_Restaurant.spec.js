/* eslint-disable no-await-in-loop */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#favorite-restaurants');
  I.see('Oops, tidak ada daftar restoran untuk ditampilkan', '.list--empty');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Oops, tidak ada daftar restoran untuk ditampilkan', '.list--empty');

  I.amOnPage('/');

  I.seeElement('.list-item__title a');

  const firstRestaurant = locate('.list-item__title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#like-button');
  I.click('#like-button');

  I.amOnPage('/#/favorites');
  I.seeElement('.list-item');
  const likedRestaurantName = await I.grabTextFrom('.list-item__title');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unlike liked restaurant', ({ I }) => {
  I.see('Oops, tidak ada daftar restoran untuk ditampilkan', '.list--empty');

  I.amOnPage('/');

  I.seeElement('.list-item__title a');
  const firstRestaurant = locate('.list-item__title a').first();
  I.click(firstRestaurant);

  I.seeElement('#like-button');
  I.click('#like-button');

  I.amOnPage('/#/favorites');

  I.seeElement('.list-item');
  const likedRestaurant = locate('.list-item__title a');
  I.click(likedRestaurant);

  I.seeElement('#like-button');
  I.click('#like-button');

  I.amOnPage('/#/favorites');

  I.see('Oops, tidak ada daftar restoran untuk ditampilkan', '.list--empty');
});
