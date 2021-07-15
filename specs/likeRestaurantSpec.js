import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  beforeEach(() => {
    TestFactories.addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"'))
      .toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonWithRestaurant({ id: 1 });

    document.querySelector('#like-button').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurantById(1);
    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurantIdb.deleteRestaurantById(1);
  });

  it('should not add the restaurant again if it\'s been liked', async () => {
    await TestFactories.createLikeButtonWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    document.querySelector('#like-button').dispatchEvent(new Event('click'));
    const restaurants = await FavoriteRestaurantIdb.getRestaurants();
    expect(restaurants).toEqual([{ id: 1 }]);

    FavoriteRestaurantIdb.deleteRestaurantById(1);
  });

  it('should not add the restaurant again if it has no id', async () => {
    await TestFactories.createLikeButtonWithRestaurant({});

    document.querySelector('#like-button').dispatchEvent(new Event('click'));
    const restaurants = await FavoriteRestaurantIdb.getRestaurants();
    expect(restaurants).toEqual([]);
  });
});
