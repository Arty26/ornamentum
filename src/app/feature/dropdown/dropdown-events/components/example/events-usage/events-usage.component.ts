import { Component } from '@angular/core';

import { DropdownComponent } from 'ornamentum';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-events-usage',
  templateUrl: './events-usage.component.html'
})
export class EventsUsageComponent {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
  }

  public onDropdownInit(dropdown: DropdownComponent): void {
    // goes your implementation
  }

  public onSelectChange(selectedData: any | any[]): void {
    // if selectTrackBy property is specified, the selected item id or ids will be passed as a parameter to this method.
    // goes your implementation
  }

  public onDataBound(): void {
    // goes your implementation
  }
}
