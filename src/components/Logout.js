import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";

function Logout() {
  const { isAuthenticated, logout } = useAuth0();

  return (
    isAuthenticated && (
      <Button
        onClick={() => {
          logout({ returnTo: window.location.origin });
        }}
      >
        Log out
      </Button>
    )
  );
}

export default Logout;
