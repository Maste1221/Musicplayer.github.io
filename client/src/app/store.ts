import { configureStore } from "@reduxjs/toolkit";
import SongSlice from "../redux/ReduxToolkit/songSlice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../redux/ReduxSaga/Rootsaga";

const SagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    songs: SongSlice, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
      SagaMiddleware
    ),
});

SagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export const Store = store; 
