import { Message } from "../domain/Message";
import { MessageRepository } from "../domain/MessageRepository";

export class LocalStorageMessageRepository implements MessageRepository {
  async getAll(): Promise<Message[]> {
    throw new Error("Method not implemented.");
  }
  async save(message: Message): Promise<void> {
    console.log(message.message.value);
  }

}