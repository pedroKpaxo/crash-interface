import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bet-spinner',
  templateUrl: './bet-spinner.component.html',
  styleUrls: ['./bet-spinner.component.scss'],
})
export class BetSpinnerComponent implements OnInit {
  @ViewChild('input', { static: true }) input!: ElementRef<HTMLInputElement>;

  value = 1.0;
  constructor() {}

  ngOnInit(): void {
    this.input.nativeElement.value = '1.0';
  }
  /**
   * Increase the value of the spinner by 0.1
   * and maintain the value to 2 decimal places
   */
  increaseValue() {
    this.value = Math.round((this.value + 0.1) * 100) / 100;
    this.setValue();
  }

  /**
   * Decrease the value of the spinner by 0.1
   */
  decreaseValue() {
    this.value = Math.round((this.value - 0.1) * 100) / 100;
    this.setValue();
  }

  setValue() {
    this.input.nativeElement.value = String(this.value);
  }
}
