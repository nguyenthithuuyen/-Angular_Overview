import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.sass']
})
export class ColorPickerComponent implements OnInit {

  background = '#00e067';
  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  onChange(value) {
    this.background = value;
  }



}
