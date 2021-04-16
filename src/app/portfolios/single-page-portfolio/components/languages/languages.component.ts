import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent implements OnInit {
  @Input() portFolioData: any;
  constructor() {}

  ngOnInit(): void {}

  numbSequences(language) {
    return Array(language.rating);
  }
}
