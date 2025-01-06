import axios from "../api/axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

const useAxiosPrivate = () => {
    const { auth, setAuth } = useAuth();

    useEffect(() => {
        const requestIntercept = axios.interceptors.request.use(
            config => {
                if (!config.headers['Authorization'] && auth?.accessToken) {
                    config.headers['Authorization'] = `Bearer ${auth.accessToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        const responseIntercept = axios.interceptors.response.use(
            response => response,
            async (error) => {
                if (error?.response?.status === 401) {
                    // Token expired or invalid
                    setAuth({});
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axios.interceptors.request.eject(requestIntercept);
            axios.interceptors.response.eject(responseIntercept);
        };
    }, [auth, setAuth]);

    return axios;
};

export default useAxiosPrivate;