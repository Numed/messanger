import { useContext, useState } from "react";
import jwt_decode from "jwt-decode";

import { LoginContext } from "../Context";


export const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const { setLogined, setUser } = useContext(LoginContext);

  const onReceive = (data) => {
    setLoading(false);
    if (data.credential !== undefined) {
      const userDate = jwt_decode(data.credential);
      setUser({
        name: userDate.given_name,
        image: userDate.picture,
        token: userDate.access_token,
      });
      localStorage.setItem("token", data.credential);
      data.credential !== undefined ? setLogined(true) : setLogined(false);
    } else {
      setUser({
        name: data.short_name || data.login,
        image: data.avatar_url || data.picture.data.url,
        token: data.access_token || data.accessToken,
      });
      localStorage.setItem("token", data.access_token || data.accessToken);
      data.access_token || data.accessToken
        ? setLogined(true)
        : setLogined(false);
    }
  };

  return { onReceive, loading, setLoading };
};
