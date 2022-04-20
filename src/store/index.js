import Vue from "vue";
import Vuex from "vuex";

// import api from "../service/api";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [],
        wishlist: [],
    },
    mutations: {
        ADD_TO_CART(state, { product, quantity }) {
            if (typeof window.localStorage.cart != "undefined") {
                state.cart = JSON.parse(window.localStorage.cart);
            }
            let productInCart = state.cart.find((item) => {
                return item.product.slug === product.slug;
            });
            if (productInCart) {
                productInCart.quantity += quantity;
            } else {
                state.cart.push({
                    product,
                    quantity,
                });
            }
            window.localStorage.cart = JSON.stringify(state.cart);
        },
        SET_CART(state) {
            if (typeof JSON.parse(window.localStorage.cart) != "undefined") {
                state.cart = JSON.parse(window.localStorage.cart);
            }
        },
        ADD_TO_WISHLIST(state, { product, quantity }) {
            if (typeof window.localStorage.cart != "undefined") {
                state.wishlist = JSON.parse(window.localStorage.wishlist);
            }
            let productInCart = state.wishlist.find((item) => {
                return item.product.slug === product.slug;
            });
            if (productInCart) {
                productInCart.quantity += quantity;
            } else {
                state.wishlist.push({
                    product,
                    quantity,
                });
            }
            window.localStorage.wishlist = JSON.stringify(state.wishlist);
        },
        SET_WISHLIST(state) {
            if (typeof JSON.parse(window.localStorage.wishlist) != "undefined") {
                state.wishlist = JSON.parse(window.localStorage.wishlist);
            }
        },
    },
    actions: {
        addToCart({ commit }, { product, quantity }) {
            commit("ADD_TO_CART", { product, quantity });
        },
        addToWishlist({ commit }, { product, quantity }) {
            commit("ADD_TO_WISHLIST", { product, quantity });
        },
    },
    getters: {}
})
