import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: `Angular's Pipes`,
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Text and dates',
            icon: 'pi pi-align-left'
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar'
          },
          {
            label: 'Uncommon',
            icon: 'pi pi-globe'
          }
        ]
      },
      {
        label: 'Custom Pipes',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'TBD',
            icon: 'pi pi-cog',
          }
        ]
      }
    ];
  }
}
