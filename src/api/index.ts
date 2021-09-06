import { post } from "./request";
console.log(import.meta.env.MODE)

function buildUrl(url: string) {
  return `/api/v1/lucky/lottery${url}`;
  // return import.meta.env.MODE === 'development'
  //   ? `/api/v1/lucky/lottery${url}`
  //   : `http://lucky.328club.com/api/v1/lucky/lottery${url}`;

}

export default class LuckyApi {
  public static getSingleBet(body: { seed: number }): Promise<IResponse> {
    return post<IResponse>(buildUrl("/lucky/"), body);
  }
  public static getBraveDrag(body: { seed: number }): Promise<IResponse> {
    return post<IResponse>(buildUrl("/dantuo/"), body);
  }
}
