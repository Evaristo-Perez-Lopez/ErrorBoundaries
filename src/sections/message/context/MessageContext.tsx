import React, { useContext } from "react";
import { MessageRepository } from "../../../modules/message/domain/MessageRepository";
import { MessageCreator } from "../../../modules/message/application/MessageCreator";
export interface ContextState {
  createMessage: (message: string) => Promise<void>;
}
export const MessageContext = React.createContext({} as ContextState);

export const MessageContextProvider = ({
  children,
  repository,
}: React.PropsWithChildren<{ repository: MessageRepository }>) => {
  async function createMessage(message: string) {
    const msgCreator = new MessageCreator(repository);
    await msgCreator.create(message);
  }

  return (
    <MessageContext.Provider value={{ createMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessageContext = () => useContext(MessageContext);
