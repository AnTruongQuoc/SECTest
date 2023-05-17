import { axiosInstance } from "./instance";

type ClickData = {
  color: string;
};

export const submitClick = async (data: ClickData) => {
  const url = "/click";
  return await axiosInstance.post(url, data);
};
