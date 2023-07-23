import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkoutsContext";

export const useLogOut = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workDispatch } = useWorkoutsContext();

  const logout = () => {
    //remove user from storage
    localStorage.removeItem("user");

    //dispatch logout action
    dispatch({ type: "LOGOUT" });
    workDispatch({ type: "SET_WORKOUTS", payload: null });
  };

  return { logout };
};
