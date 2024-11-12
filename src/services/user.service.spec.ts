import axios from "axios";
import { User, UserService } from "./user.service";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get = jest.fn();
const user: User = { id: 123, name: 'Zak' };

describe('UserService', () => {
  it('should get user', async () => {
    mockedAxios.get.mockResolvedValueOnce({ status: 200, data: user });
    const result = (await new UserService().find(user.id)).data;
    expect(axios.get).toHaveBeenCalledWith('/api/users/123')
    expect(result).toEqual(user);
  });
});