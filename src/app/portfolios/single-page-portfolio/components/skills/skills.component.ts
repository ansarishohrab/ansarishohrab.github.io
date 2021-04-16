import { Component, Input, OnInit } from '@angular/core';

declare let $: any;
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  @Input() portFolioData: any;
  constructor() {}

  ngOnInit(): void {
    $('.level-bar-inner').each(function () {
      var itemWidth = $(this).data('level');

      $(this).animate(
        {
          width: itemWidth,
        },
        800
      );
    });
  }
}
