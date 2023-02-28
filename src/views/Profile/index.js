/* eslint-disable @next/next/no-img-element */
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>

        <button
          onClick={() => logout({ returnTo: process.env.AUTH0_REDIRECT_URI })}
        >
          Log Out
        </button>
      </div>
    )
  );
};

export default Profile;
