import { useMessageContext } from "../context/MessageContext";

export function useMessageForm(): { submitForm: (formData: { message: string }) => Promise<void>; } {
  const { createMessage } = useMessageContext()
  async function submitForm({ message }: { message: string }) {
    try {
      createMessage(message)
    } catch (error) {
      console.log(error);
    }
  }
  return { submitForm }
}