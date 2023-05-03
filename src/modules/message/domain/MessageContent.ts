export class MessageContent {
  private static MAX_LEN_MESSAGE = 25
  constructor(readonly value: string) {
    if (MessageContent.containWhitespace(value)) {
      throw new Error(MessageContent.containWhitespaceMessage())
    }
    if (!MessageContent.contentLenght(value)) {
      throw new Error(MessageContent.containWhitespaceMessage())
    }
  }

  static contentLenght(value: string): boolean {
    return value.length <= this.MAX_LEN_MESSAGE
  }
  static contentLenghtMessage(): string {
    return `Your message es to loong. Please fit that in ${this.MAX_LEN_MESSAGE}`
  }
  static containWhitespace(value: string): boolean {
    const regex = /^(?=\s*$)/g
    value = value.trim()
    return regex.test(value)
  }
  static containWhitespaceMessage(): string {
    return `Your message must contain text characters in it`
  }

}