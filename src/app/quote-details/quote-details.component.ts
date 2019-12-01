import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote:Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  @Output() isUp = new EventEmitter<boolean>();
  addUp(add:boolean){
    this.isUp.emit(add);
  }
  @Output() isDown = new EventEmitter<boolean>();
  addDown(ad:boolean){
    this.isDown.emit(ad);
  }


  constructor() { }

  ngOnInit() {
  }

}
