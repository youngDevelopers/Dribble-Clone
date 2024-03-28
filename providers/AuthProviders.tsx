"use client";

import Button from "@/components/Button";

import { getProviders, signIn } from "next-auth/react";
import React, { useEffect, useState } from "react";

type ProviderPops = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | undefined;
};

type Providers = Record<string, ProviderPops>;

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);

  //onMounting this component fetch the authentication providers from next-auth
  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();

      setProviders(res);
    };

    fetchProviders();
  }, []);

  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider: ProviderPops, i) => (
          <Button
            key={i}
            title="Sign In"
            handleClick={() => signIn(provider?.id)}
          />
        ))}
      </div>
    );
  }

  return null;
};

export default AuthProviders;
