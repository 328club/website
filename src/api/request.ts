import axios from "axios";

async function post<T = any>(url: string, body: any): Promise<T> {
  const data = await axios.post(url, body);
  if (data.status === 200) {
    return data.data;
  }
  return Promise.reject("get request error");
}

export { post };
