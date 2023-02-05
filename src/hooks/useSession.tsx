import { useContext } from "react";
import { SessionContext } from "@/context/SessionProvider";

export const useSession = () => {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }

  return context;
}
