import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  subject = webSocket('ws://localhost:9001');

  constructor() { }

  /**
   * Send message to the server
   * @param message
   * Buraya soket mesaji gelecek
   */
  sendMessage(message: string): void {
    this.subject.subscribe();
    this.subject.next({
      content: message
    });
  }
}
