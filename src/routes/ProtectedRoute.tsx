import { useSession } from "@/hooks/useSession";
import { Navigate, useLocation } from "react-router-dom";

type ProtectedRouteProps = {
    redirectTo?: string;
    children: JSX.Element;
};

function ProtectedRoute({
    redirectTo = "/session",
    children,
}: ProtectedRouteProps) {
    const { hasActiveSession } = useSession();
    const location = useLocation();

    if (!hasActiveSession) {
        return <Navigate to={redirectTo} state={{ pathname: location.pathname }} />;
    }

    return children;
}

export default ProtectedRoute;
