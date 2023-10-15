import { configureStore } from '@reduxjs/toolkit'
import ZoneReduser from './reducer/ZoneReduser';

export default configureStore({
  reducer: {
    zone: ZoneReduser,
  },
})