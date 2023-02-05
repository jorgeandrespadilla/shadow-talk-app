import toast from "react-hot-toast";

/**
 * Handle errors from API calls
 * @param error The error returned from the server
 */
export const handleAPIError = (error: any) => {
    console.error(error);
    toast.error(error?.message ?? 'Something went wrong');
}