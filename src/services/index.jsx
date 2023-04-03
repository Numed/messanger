import { useHttp } from "../hooks/https.hook";

const useRequestService = () => {
  const { request } = useHttp();

  const findUser = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/find`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  const registerUser = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/registration`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  const registerBySocialUser = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/registrationSocial`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  const loginUser = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/login`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  const updateUser = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/update`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  const updateMessagesUser = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/updateMessages`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  return {
    findUser,
    registerUser,
    registerBySocialUser,
    loginUser,
    updateUser,
    updateMessagesUser,
  };
};

export default useRequestService;
