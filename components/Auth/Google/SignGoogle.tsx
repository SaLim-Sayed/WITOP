"use client";
import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
export default function SignGoogle() {
  const router = useRouter();
  const handleLogin = async (access_token: any) => {
    console.log(access_token);
    try {
      const res = await axios.post(
        "https://maro-cares-z86j.onrender.com/auth/google",
        { access_token: access_token }
      );
      if (res.data.message === "success") {
        console.log(res);
        Cookies.set("token", res.data?.userToken, {
          expires: 1000,
        });

        router.push("/");

        return;
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <main>
      <GoogleOAuthProvider clientId="12860731229-dna5n86clt6jpsfmkga1qlh8ggimil9p.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            handleLogin(credentialResponse.credential);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </main>
  );
}
