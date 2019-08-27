import parseArticle from "./renderNewsForState";
import { api, getLiveNews } from "./api";

export { parseArticle, api, getLiveNews };

const services = {
  parseArticle,
  api
};

export default services;
