import axios from "axios";

const list = () => axios.get("/urls");

const create = payload => axios.post("/urls", payload);

const update = ({ id, payload }) => axios.put(`/urls/${id}`, payload);

const download = () => axios.get("/urls.csv");

const urlsApi = {
  list,
  create,
  update,
  download,
};

export default urlsApi;
