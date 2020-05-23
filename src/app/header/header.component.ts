import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() linkEmitter = new EventEmitter<string>();
  linkClicked: string;

  constructor() { }

  ngOnInit(): void {
  }

  onLinkClicked() {
    this.linkEmitter.emit(this.linkClicked);
  }
}
