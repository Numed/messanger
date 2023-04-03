import { useContext, useState } from "react";
import jwt_decode from "jwt-decode";

import useRequestService from "../../services/index";
import { LoginContext } from "../Context";
import { notifyError } from "../../helpers/notifications";

export const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const { setLogined, setUser } = useContext(LoginContext);
  const { registerBySocialUser } = useRequestService();

  const onReceive = (data) => {
    const dataReceive = data;
    let outputData;
    if (dataReceive.credential === undefined) {
      outputData = {
        name: dataReceive.short_name || dataReceive.login,
        image: dataReceive.avatar_url || dataReceive.picture.data.url,
        email: dataReceive.email,
        bySocial: dataReceive.graphDomain || "github",
      };
    } else {
      const decodeData = jwt_decode(data.credential);
      outputData = {
        name: decodeData.given_name,
        email: decodeData.email,
        image: decodeData.picture,
        bySocial: "google",
      };
    }

    registerBySocialUser(outputData).then(signUp).catch(onError);
  };

  const signUp = (data) => {
    setLoading(false);
    setUser({
      name: data.name,
      image: data.image,
      email: data.email,
      token: data.token
        ? (data.token, localStorage.setItem("token", data.token))
        : null,
    });
    setLogined(true);
    localStorage.setItem("logined", true);
  };

  const onError = (e) => {
    notifyError(e);
  };

  return { onReceive, loading, setLoading };
};
