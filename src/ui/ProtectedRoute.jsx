import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  background-color: var(--color-grey-50);
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1.load auth user data
  const { isLoading, isAuthenticated } = useUser();

  // 2.redirect
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3. show spinner while loading data
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
