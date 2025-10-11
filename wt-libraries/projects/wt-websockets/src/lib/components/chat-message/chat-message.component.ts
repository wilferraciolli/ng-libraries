import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Message } from '../../interfaces/message.interface';

@Component({
  selector: 'wt-chat-message',
  imports: [NgClass],
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.scss'
})
export class ChatMessageComponent {
  @Input({ required: true })
  public clientId!: string;

  @Input({ required: true })
  public message!: Message;

  public isSelfMessage(): boolean {
    return this.clientId === this.message.clientId;
  }
}
