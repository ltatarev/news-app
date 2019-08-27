import {
  fetchNews,
  requestNews,
  initialRequest,
  receiveNews,
  receiveNewsFailed
} from "./news";

export {
  fetchNews,
  requestNews,
  initialRequest,
  receiveNews,
  receiveNewsFailed
};

const actions = {
  initialRequest,
  requestNews,
  receiveNews,
  receiveNewsFailed,
  fetchNews
};

export default actions;
