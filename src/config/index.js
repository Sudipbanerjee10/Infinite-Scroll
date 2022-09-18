const {
  REACT_APP_TMDB_API_KEY,
  REACT_APP_TMDB_BASE_URL,
  REACT_APP_TMDB_IMAGE_URL,
} = process.env;

const config = {
  tmdb_api_key: REACT_APP_TMDB_API_KEY,
  tmdb_base_url: REACT_APP_TMDB_BASE_URL,
  tmdb_image_url: REACT_APP_TMDB_IMAGE_URL,
};

export { config };
