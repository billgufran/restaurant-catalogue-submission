import RestaurantList from '../views/pages/list';
import FavoritesRestaurant from '../views/pages/favorites';
import RestaurantDetail from '../views/pages/detail';

const routes = {
  '/': RestaurantList, // default page
  '/list': RestaurantList,
  '/favorites': FavoritesRestaurant,
  '/detail/:id': RestaurantDetail,
};

export default routes;
