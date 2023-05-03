import { MessageContent } from "./MessageContent";

export class Message {
  constructor(readonly message: MessageContent) { }

  static create({ message }: { message: string }) {
    return new Message(new MessageContent(message))
  }
}