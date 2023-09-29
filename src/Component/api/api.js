import axios from "axios";

const BackendEndpoint = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const response = await axios.get(`${BackendEndpoint}/albums/top`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchNewAlbums = async () => {
  try {
    const response = await axios.get(`${BackendEndpoint}/albums/new`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchSongs = async () => {
  try {
    const response = await axios.get(`${BackendEndpoint}/songs`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
