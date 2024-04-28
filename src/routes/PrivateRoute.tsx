import { Navigate } from "react-router-dom";

import { useForm } from "@/hooks/useForm"

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const { haveUser } = useForm();

    return haveUser? children : <Navigate to="/main" replace/>
}