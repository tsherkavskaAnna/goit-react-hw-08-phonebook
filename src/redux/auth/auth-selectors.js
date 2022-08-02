const getUserName = state => state.auth.user.name;
const getLoading = state => state.auth.isLoading;
const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
    getUserName,
    getLoading,
    getIsLoggedIn,
    getIsFetchingCurrent,
};

export default authSelectors;