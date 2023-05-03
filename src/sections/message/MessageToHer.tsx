import { LocalStorageMessageRepository } from "../../modules/message/infraestructure/LocalStorageMessageRepository";
import CreateForm from "./CreateForm";
import Message from "./Message";
import { MessageContextProvider } from "./context/MessageContext";

function MessageToHer() {
  const repository = new LocalStorageMessageRepository();
  return (
    <>
      <MessageContextProvider repository={repository}>
        <section className="w-full max-w-md mx-auto p-3">
          <h2 className="font-bold text-sm p-3 text-sky-700 uppercase">
            Send a Message
          </h2>

          <CreateForm />
          <section className="flex flex-col gap-2 mt-3">
            <Message stamp={new Date()}>First Message</Message>
            <Message stamp={new Date()}>First Message</Message>
          </section>
        </section>
      </MessageContextProvider>
    </>
  );
}

export default MessageToHer;
