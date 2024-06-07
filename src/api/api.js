import axios from "axios";
import { base_url } from "../constant";

let post_api = async (endpoint, data) => {
  let result = await axios.post(base_url + endpoint, data);
  return result;
};

let get_api = async (endpoint) => {
  let result = await axios.get(base_url + endpoint);

  return result;
};

let delete_api = async (endpoint, id) => {
  let result = await axios.delete(base_url + endpoint + id);
  return result;
};

let update_api = async (endpoint, data) => {
  let result = await axios.put(base_url + endpoint + data.id, data);
  return result;
};
export { post_api, get_api, delete_api, update_api };
