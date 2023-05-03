import { Message } from "../domain/Message";
import { MessageRepository } from "../domain/MessageRepository";

export class MessageCreator {
  constructor(readonly repository: MessageRepository) {

  }
  async create(message: string): Promise<void> {
    const newMsg = Message.create({ message })
    await this.repository.save(newMsg)
  }
}