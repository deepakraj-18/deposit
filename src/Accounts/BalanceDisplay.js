
import { connect } from 'react-redux'

function BalanceDisplay({balance}) {
  return  <>
  <h2>Account Balance : {balance}</h2>
  {/* <p style={{paddingLeft:"30px",fontSize:"25px"}}> {balance} </p>  */}
  </> 
}
const amountShow=(state)=>{
  return{
    balance:state.account.balance,
  }
}
export default connect(amountShow ) (BalanceDisplay);