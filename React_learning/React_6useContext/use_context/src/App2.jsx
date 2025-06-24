import UserInfoProvider from "./context/userInfoContext";
import Checkout2 from "./Checkout2";
import Login2 from "./Login2";
import Logout2 from "./Logout2";
import Login2_useReducer from "./Login2_useReducer";
import Logout2_useReducer from "./Logout2_useReducer";
import Checkout2_useReducer from "./Checkout2_useReducer";
import UserInfoProvider2 from "./context/userInfoContext_useReducer";

function App2() {
  return (
    <div>
      {/*<UserInfoProvider>*/}
      <UserInfoProvider2>
        {/*<Login2 />*/}
        {/*<Logout2 />*/}
        {/*<Checkout2 />*/}
        <Login2_useReducer />
        <Logout2_useReducer />
        <Checkout2_useReducer />
        {/*</UserInfoProvider>*/}
      </UserInfoProvider2>
    </div>
  );
}

export default App2;
