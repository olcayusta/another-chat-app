import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'chat-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
