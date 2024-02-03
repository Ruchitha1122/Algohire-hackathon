import axios from "axios";
import { API_NOTIFICATION_MESSAGES,SERVICE_URLS } from "../constants/config";

const API_URL = "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "content-type": "application/json",
  },
});

axiosInstance.interceptors.request.use(function (config) {
  return config;
});

axiosInstance.interceptors.response.use(
  function (response) {
    return processResponse(response);
  },
  function (error) {
    return Promise.reject(processError(error));
  }
);

const processResponse = (response) => {
  if (response?.status === 200) {
    return { isSuccess: true, data: response.data };
  } else {
    return {
      isFailure: true,
      status: response?.status,
      msg: response?.msg,
      code: response?.code,
    };
  }
};

const processError = (error) => {
   
  
  if (error.response) {
   // console.log("Error in response:", error.response.data);
    return {
      isError: true,
      msg: error.response.data || API_NOTIFICATION_MESSAGES.responsefailure,
      code: error.response.status,
    };
  } else if (error.request) {
    console.log("Error in request:", error.request);
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.requestfailure,
      code: "", // as it doesn't go to the backend
    };
  } else {
    console.log("Error in network:", error.message);
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.networkError,
      code: "", // it doesn't go to the backend
    };
  }
};

const API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)) {
  API[key] = (body, showUploadProgress, showDownloadProgress) =>
    axiosInstance({
      method: value.method,
      url: value.url,
      data: body,
      responseType: value.responseType,
      onUploadProgress: function (progressEvent) {
        if (showUploadProgress) {
          let percentageCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showUploadProgress(percentageCompleted);
        }
      },
      onDownloadProgress: function (progressEvent) {
        if (showDownloadProgress) {
          let percentageCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showDownloadProgress(percentageCompleted);
        }
      },
    });
}

export { API };
