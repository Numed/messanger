import { useContext, useState } from "react";
import jwt_decode from "jwt-decode";

import { useHttp } from "../../hooks/https.hook";
import { LoginContext } from "../Context";

export const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const { setLogined, setUser } = useContext(LoginContext);
  const { request } = useHttp();

  const onReceive = (data) => {
    console.log("DATA: ", data);
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

    request(
      `${process.env.REACT_APP_FETCH_TEMPLATE}/registrationSocial`,
      "POST",
      JSON.stringify(outputData)
    )
      .then(signUp)
      .catch(onError);
  };

  const signUp = (data) => {
    setLoading(false);
    setUser({
      name: data.name,
      image: data.image,
      token: data.token
        ? (data.token, localStorage.setItem("token", data.token))
        : null,
    });
    setLogined(true);
  };

  const onError = (e) => {
    console.log(e);
  };

  return { onReceive, loading, setLoading };
};
