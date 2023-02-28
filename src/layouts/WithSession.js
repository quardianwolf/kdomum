/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import useSession from "@session/useSession";
import { SessionProvider } from "@session/SessionContext";

import ProgressLoaders from "@component/ProgressLoaders";

const WithSession = ({ requireSession, ...rest }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session.isLoading == false) {
      setLoading(true);
    }
  }, [session]);

  if (loading) {
    if (requireSession) {
      if (!session.isAuthenticated) {
        router.push("/");
      }
    }

    return <SessionProvider value={session}>{rest.children}</SessionProvider>;
  } else {
    if (requireSession) {
      return <ProgressLoaders></ProgressLoaders>;
    }
    return <SessionProvider value={null}>{rest.children}</SessionProvider>;
  }
};

export default WithSession;
