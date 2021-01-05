import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size-editor',
  templateUrl: './font-size-editor.component.html',
  styleUrls: ['./font-size-editor.component.sass']
})
export class FontSizeEditorComponent implements OnInit {

  constructor() { }
  fontSize = 14;
  // tslint:disable-next-line:typedef
  onChange = (value: number) => {
    this.fontSize = value;
  }
  ngOnInit(): void {
  }

}
