"use client";

import { Provider } from "react-redux";
import { store } from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
  let persistor = persistStore(store);
  return (
    <SessionProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>{children}</PersistGate>
      </Provider>
    </SessionProvider>
  );
}
