const getUserName = state => state.auth.user.name;
const getLoading = state => state.auth.isLoading;
const getIsLogIn = state => state.auth.isLogIn;
const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
    getUserName,
    getLoading,
    getIsLogIn,
    getIsFetchingCurrent,
};

export default authSelectors;