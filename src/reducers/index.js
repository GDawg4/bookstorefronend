import { combineReducers } from "redux";

import auth, * as authSelectors from './auth';
import books, * as bookSelectors from './books';
import users, * as userSelectors from './users';
import authors, * as authorSelectors from "./authors";
import tags, * as tagSelectors from './tags';
import transactions, * as transactionsSelectors from "./transactions";
import cart, * as cartSelectors from './cart';
import reviews, * as reviewSelectors from './reviews'
import analysis, * as analysisSelectors from './analysis'

const reducer = combineReducers({
    auth,
    users,
    books,
    authors,
    tags,
    transactions,
    cart,
    reviews,
    analysis
})

export default reducer;

export const getBookByID = (state, id) => bookSelectors.getBookByID(state.reducer.books, id);
export const getBookOrder = (state) => bookSelectors.getBookOrder(state.reducer.books);
export const getAllBooks = (state) => bookSelectors.getAllBooks(state.reducer.books);
export const getSelectedBook = (state) => bookSelectors.getSelectedBook(state.reducer.books);
export const getIsFetchingBooks = (state) => bookSelectors.getIsFetching(state.reducer.books);

export const getAuthToken = state => authSelectors.getAuthToken(state.reducer.auth);
export const getIsAuthenticating = state => authSelectors.getIsAuthenticating(state.reducer.auth);
export const getAuthenticatingError = state => authSelectors.getAuthenticatingError(state.reducer.auth);
export const getAuthUserId = state => authSelectors.getAuthUserId(state.reducer.auth);
export const getAuthExpiration = state => authSelectors.getAuthExpiration(state.reducer.auth);
export const getAuthUsername = state => authSelectors.getAuthUsername(state.reducer.auth);
export const getIsRefreshingToken = state => authSelectors.getIsRefreshingToken(state.reducer.auth);
export const getRefreshingError = state => authSelectors.getRefreshingError(state.reducer.auth);
export const isAuthenticated = state => getAuthToken(state) != null;

export const getUser = (state, id) => userSelectors.getUser(state.reducer.users, id);
export const getUsers = state => userSelectors.getUsers(state.reducer.users);
export const getIsAddingUser = state => userSelectors.getIsAdding(state.reducer.users);
export const getAddingErrorUser = state => userSelectors.getAddingError(state.reducer.users);
export const isSuccessfulUser = state => userSelectors.isSuccessful(state.reducer.users);

export const getAuthor = (state, id) => authorSelectors.getAuthor(state.reducer.authors, id);
export const getAuthors = state => authorSelectors.getAuthors(state.reducer.authors);
export const getIsAdding = state => authorSelectors.getIsAdding(state.reducer.authors);
export const getAddingError = state => authorSelectors.getAddingError(state.reducer.authors);
export const isSuccessful = state => authorSelectors.isSuccessful(state.reducer.authors);
export const selectedAuthor = state => authorSelectors.selectedAuthor(state.reducer.authors);
export const getAuthorBooks = state => authorSelectors.getAuthorBooks(state.reducer.authors);

export const getTag = (state, id) => tagSelectors.getTag(state.reducer.tags, id);
export const getTags = state => tagSelectors.getTags(state.reducer.tags);
export const selectedTag = state => tagSelectors.selectedTag(state.reducer.tags);
export const isFetchingTags = state => tagSelectors.getIsFetching(state.reducer.tags);

export const getTransaction = (state, id) => transactionsSelectors.getTransaction(state.reducer.transactions, id);
export const getTransactions = state => transactionsSelectors.getTransactions(state.reducer.transactions);
export const getIsAddingTransaction = state => transactionsSelectors.getIsAdding(state.reducer.transactions);
export const getAddingErrorTransaction = state => transactionsSelectors.getAddingError(state.reducer.transactions);
export const isSuccessfulTransaction = state => transactionsSelectors.isSuccessful(state.reducer.transactions);

export const getCart = state => cartSelectors.getCart(state.reducer.cart);
export const getIsBookInCart = (state, book) => cartSelectors.isBookInCart(state.reducer.cart, book);

export const getReview = (state, id) => reviewSelectors.getReviewByID(state.reducer.reviews, id)
export const getAllReviews = (state) => reviewSelectors.getAllReviews(state.reducer.reviews)