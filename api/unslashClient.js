import axiosClient from "./axiosClient";
const unslashClient = {
  getPhotos: (params) => {
    const url = `photos`;
    return axiosClient.get(url, { params });
  },
  searchPhotos: (params) => {
    const url = `search/photos`;
    return axiosClient.get(url, { params });
  },

  getTopics: (params, type) => {
    const url = `topics/${type}/photos`;
    return axiosClient.get(url, { params });
  },
};

export default unslashClient;
