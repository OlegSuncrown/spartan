import { Component, TrackByFunction } from '@angular/core';
import { ThreeHundredItemComponent } from './th-item.component';
import { NgForOf } from '@angular/common';
import { ThreeHundredItemPlaceholderComponent } from './th-item-placeholder.component';

@Component({
  selector: 'spartan-three-hundred',
  standalone: true,
  imports: [ThreeHundredItemComponent, NgForOf, ThreeHundredItemPlaceholderComponent],
  host: {
    class: 'flex flex-wrap grid gap-2 grid-cols-10',
  },
  template: `
    <spartan-th-item
      *ngFor="let contributor of _contributors; trackBy: _trackBy"
      [href]="'https://github.com/' + contributor"
      >{{ contributor }}</spartan-th-item
    >
    <spartan-th-item-placeholder *ngFor="let item of _rest; trackBy: _trackBy" />
  `,
})
export class ThreeHundredComponent {
  protected readonly _contributors = ['goetzrobin', 'mihajm', 'AdditionAddict', 'ajitzero'];
  protected readonly _rest = Array(300 - this._contributors.length).map((x, i) => i);
  protected readonly _trackBy: TrackByFunction<number | string> = (n) => n;
}