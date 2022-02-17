import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'


import CategoryReducer from "./reducers/category.reducer";
import BreadsReducer from "./reducers/breads.reducer";
import CartReducer from "./reducers/cart.reducer";
import OrderReducer from "./reducers/order.reducer";
import PlacesReducer from "./reducers/places.reducer";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    breads: BreadsReducer,
    cart: CartReducer,
    orders: OrderReducer,
    places: PlacesReducer
});

export default createStore(RootReducer, applyMiddleware(thunk));