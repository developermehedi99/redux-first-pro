import { useDispatch, useSelector } from "react-redux";
import { appDispatch, RootState } from "./store";

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDespatch = useDispatch.withTypes<appDispatch>();
