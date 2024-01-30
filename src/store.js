import{configureStore} from '@reduxjs/toolkit'
import AccountSlice from './Accounts/AccountSlice'

const Store = configureStore({
   reducer:{
    account:AccountSlice,
   }

})
export default Store