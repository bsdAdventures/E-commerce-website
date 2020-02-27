import { takeEvery, call, put, all } from "redux-saga/effects";
import { ShopActionTypes } from "./shop.types";

export function* fetchCollectionsAsync() {
  yield console.log("iam fire");
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
