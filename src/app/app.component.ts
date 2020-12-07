import { Component } from '@angular/core';

import { IFlash } from './flash/models/flash.model';

function getRandomNumber(): number {
  return Math.floor(Math.random() * 10000);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flashes: IFlash[] = [{
    question: 'Question 1',
    answer: 'Answer 1',
    show: false,
    id: getRandomNumber(),
  }, {
    question: 'Question 2',
    answer: 'Answer 2',
    show: false,
    id: getRandomNumber(),
  }, {
    question: 'Question 3',
    answer: 'Answer 3',
    show: false,
    id: getRandomNumber(),
  }];

  editing = false;
  editingId: number;

  handleToggleCard(id: number): void {
    const flash = this.flashes.find(f => f.id === id);
    flash.show = !flash.show;
  }

  handleDelete(id: number): void {
    console.log('flashId');
    const flashId = this.flashes.indexOf(f => f.id === id);
    this.flashes.splice(flashId, 1);
  }

  handleEdit(id: number): void {
    this.editing = true;
    this.editingId = id;
    // TODO: Edit
  }

  handleRememberedChange({id, flag}): void {
    const flash = this.flashes.find(f => f.id === id);
    flash.remembered = flag;
  }

  trackByFlashId(index: number, flash: IFlash): number {
    return flash.id;
  }
}
