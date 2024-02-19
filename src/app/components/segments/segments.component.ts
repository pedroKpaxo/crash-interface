import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-segments',
  templateUrl: './segments.component.html',
  styleUrls: ['./segments.component.scss']
})
export class SegmentsComponent implements OnInit {
  @Input() segments: string[] = [];
  selectedSegment!: string;

  constructor() { }

  ngOnInit(): void {
    this.selectedSegment = this.segments[0];
  }

  selectSegment(segment: string): void {
    this.selectedSegment = segment;
  }
}
