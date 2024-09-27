import {createStore,combineReducers,applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { ProductsReducer,ProductDetailsReducer, newProductReducer, productReducer, newReviewReducer, productReviewsReducer, reviewReducer } from './reducer/ProductReducer';
import { allUsersReducer, authReducer, forgotPasswordReducer, userDetailsReducer, userReducer } from './reducer/userReducer';
import { cartReducer } from './reducer/CartReducer';
import { allOrdersReducer, myOrdersReducer, newOrderReducer, orderDetailsReducer, orderReducer,  } from './reducer/orderReducer';



const reducer= combineReducers ({
    products:ProductsReducer,
    productDetails:ProductDetailsReducer,
    auth: authReducer,
    user: userReducer,
    forgotPassword:forgotPasswordReducer,
    cart:cartReducer,
    newProduct:newProductReducer,
    product:productReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    newReview: newReviewReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    allOrders: allOrdersReducer,
    order: orderReducer,
    productReviews: productReviewsReducer,
    review: reviewReducer
    

    
    
})

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingInfo: localStorage.getItem('shippingInfo')
            ? JSON.parse(localStorage.getItem('shippingInfo'))
            : {}
    }
}


const middleware= [thunk]
const store = createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;