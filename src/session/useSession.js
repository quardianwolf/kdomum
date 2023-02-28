const useSession = () => {
  const user = { name: 'John Doe' };
  const isAuthenticated = true;
  const token = '1234567890';
  const isLoading = false;

  return {
    isAuthenticated,
    user,
    token,
    isLoading,
  };
};

export default useSession;