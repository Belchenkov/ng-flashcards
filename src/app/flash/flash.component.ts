import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IFlash } from './models/flash.model';

export interface IEmitType {
  id: number;
  flag: string;
}

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css']
})
export class FlashComponent implements OnInit {
  @Input() flash: IFlash = {
    id: 1,
    question: 'React to Angular',
    answer: 'No Reaction :)',
    show: false,
  };

  @Output() onToggleCard = new EventEmitter<number>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onEdit = new EventEmitter<any>();
  @Output() onRememberedChange = new EventEmitter<IEmitType>();

  toggleCard(): void {
    this.onToggleCard.emit(this.flash.id);
  }

  markCorrect(): void {
    this.onRememberedChange.emit({
      id: this.flash.id,
      flag: 'correct'
    });
  }

  markIncorrect(): void  {
    this.onRememberedChange.emit({
      id: this.flash.id,
      flag: 'incorrect',
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
