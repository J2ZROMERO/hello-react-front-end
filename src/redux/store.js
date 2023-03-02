import { configureStore } from '@reduxjs/toolkit';
import reducer from './greetingSlice';

const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();

export default configureStore({
  reducer: {
    greeting: reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

});
