import { PayloadAction } from '@reduxjs/toolkit';
import { fork, take } from 'redux-saga/effects';
import { LoginPayload, authActions } from './authSlice';

function* handleLogin(payload: LoginPayload) {}

function* handleLogout() {}

function* watchLoginFlow() {
  const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
  yield fork(handleLogin, action.payload);

  yield take(authActions.logout.type);
  yield fork(handleLogout);
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
