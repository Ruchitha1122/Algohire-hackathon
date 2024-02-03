//API_NOTIFICATION_MESSAGES=

export const API_NOTIFICATION_MESSAGES = 
    {
    loading: {
            title: "loading...",
        message:"Data is loading, Please wait"
    },
    success: {
        title: "success",
        message:"Data is successfully loaded"
        
    },
    responsefailure: {
        title: "Error occured",
        message:"An error occured while fetching response from the server, Please try again"
    },
    requestFailure: {
        title: "Error",
        message:"An error occured while parsing data that is requested"
    },
    networkError: {
        title: "Error",
        message:"Unable to connect with the server. Please check your internet"
    }
}

//API SERVICE CALL={}

export const SERVICE_URLS = {
    userSignup: {url: '/signup', method: 'POST'}
}