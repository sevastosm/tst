import axios from "axios";

const apiKey: string = "4e8c676c-80e9-4bee-8391-b861cbaad6ce";

const sub_id: string = "my_cat_list_seb_5555";

const getTenRandomCats = async () => {
  try {
    axios.defaults.headers.common["x-api-key"] = apiKey; // Replace this with your API Key

    let query_params = {
      limit: 100,
      order: "Rand",
      mime_types: "png"
    };

    let response = await axios.get(
      "https://api.thecatapi.com/v1/images/search",
      { params: query_params }
    );

    return response;
  } catch (err) {
    console.log(err);
  }
};

const loadMoreCats = async (pageNumer: number) => {
  try {
    axios.defaults.headers.common["x-api-key"] = apiKey; // Replace this with your API Key

    let query_params = {
      limit: 100,
      page: pageNumer
    };

    let response = await axios.get(
      "https://api.thecatapi.com/v1/images/search",
      { params: query_params }
    );

    return response;
  } catch (err) {
    console.log(err);
  }
};

const getCAtById = async (id: string) => {
  try {
    axios.defaults.headers.common["x-api-key"] = apiKey; // Replace this with your API Key

    let query_params = {
      limit: 10,
      order: "Rand",
      mime_types: "png"
    };

    let response = await axios.get(
      `https://api.thecatapi.com/v1/images/${id}`,
      { params: query_params }
    );

    return response;
  } catch (err) {
    console.log(err);
  }
};
//??
const getFavouritesList = async () => {
  try {
    let query_params = {
      limit: 10,
      order: "DESC",
      page: 0
    };
    let response = await axios.get("https://api.thecatapi.com/v1/favourites", {
      params: query_params
    });
    console.log(response);
    // this.favourites = response.data
    // this.pagination_count = response.headers['pagination-count'];
    // this.clearError();
  } catch (err) {
    console.log(err);
  }
};

const setCAtAsFAvourite = async (id: string) => {
  try {
    let post_body = {
      image_id: id,
      sub_id: sub_id
    };
    let response = await axios.post(
      "https://api.thecatapi.com/v1/favourites",
      post_body
    );
    console.log(response);
    catApis.getFavouritesList();
  } catch (error) {
    console.log(error);
  }
};
const catApis = {
  getTenRandomCats: getTenRandomCats,
  loadMoreCats: loadMoreCats,
  getCAtById: getCAtById,
  setCAtAsFAvourite: setCAtAsFAvourite,
  getFavouritesList: getFavouritesList
};

export default catApis;
