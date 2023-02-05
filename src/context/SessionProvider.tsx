import { createContext, useState } from "react";
import localforage from "localforage";
import { Session } from "@/shared/types";

interface SessionContextData {
  hasActiveSession: boolean;
  updateSession: (session: Session) => Promise<void>;
  removeSession: () => Promise<void>;
  getSessionCode: () => Promise<string | null>;
  session: Session | null;
}

type SessionProviderProps = {
  children: React.ReactNode;
};

export const SessionContext = createContext<SessionContextData>({
  hasActiveSession: false,
  updateSession: () => new Promise(() => null),
  removeSession: () => new Promise(() => null),
  getSessionCode: () => new Promise(() => null),
  session: null,
});

export const SessionProvider = ({ children }: SessionProviderProps) => {
  const [session, setSession] = useState<Session | null>(null);

  const updateSession = async (session: Session) => {
    await localforage.setItem("session", session.sessionCode);
    setSession(session);
  };


  const removeSession = async () => {
    await localforage.removeItem("session");
    setSession(null);
  };

  const getSessionCode = async () => {
    const session = await localforage.getItem<string>("session");
    return session;
  };

  const hasActiveSession = session !== null;

  return (
    <SessionContext.Provider value={{
      hasActiveSession,
      updateSession,
      removeSession,
      getSessionCode,
      session,
    }}>
      {children}
    </SessionContext.Provider>
  );
}
