import AuthContext from "../store/auth-context";

const authValue = { isLoggedIn: null };
const AuthProvider = (props) => {
  return (
    <AuthContext.Provider value={authValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
