import axios, { AxiosResponse } from "axios";

export class UserService {
  public async find(userId: number): Promise<AxiosResponse<User>> {
    console.error(axios);
    return axios.get(`/api/users/${userId}`);
  }
}

export interface User {
  id: number;
  name: string;
}