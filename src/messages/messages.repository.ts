import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string) {
    const contents = await this.getContents();
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {
    const contents = await this.getContents();
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: string) {
    const contents = await this.getContents();
    const messages = JSON.parse(contents);
    const id = Math.floor(Math.random() * 1000);

    messages[id] = {
      content,
      id,
    };

    await writeFile('messages.json', JSON.stringify(messages));
  }

  private async getContents() {
    return await readFile('./messages.json', 'utf-8');
  }
}
