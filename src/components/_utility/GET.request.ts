import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';

const GET = async ({ url }: { url: string }): Promise<AxiosResponse> => {
  const options = {
    method: 'GET',
    url: `${url}`,
  };

  const response = await axios(options as AxiosRequestConfig);

  console.log({ GET: response });

  return response;
};

export default GET;
