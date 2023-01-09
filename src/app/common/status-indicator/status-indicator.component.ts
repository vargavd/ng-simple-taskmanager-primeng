// ANGULAR IMPORTS
import { Component, Input } from '@angular/core';

// DATA TYPE IMPORT
import { TASK_STATUS } from 'src/app/helper/data';

@Component({
  selector: 'app-status-indicator',
  templateUrl: './status-indicator.component.html',
  styleUrls: ['./status-indicator.component.scss']
})
export class StatusIndicatorComponent {
  @Input() status: TASK_STATUS;
  @Input() colorLabel: boolean = false;

  getStatusKey(separator: string = ' ') {
    const origKey = Object.keys(TASK_STATUS)[Object.values(TASK_STATUS).indexOf(this.status)];

    return origKey.replace(/_/g, separator);
  }

  getColorLabelClass() {
    return this.colorLabel ? 'color-label' : '';
  }

}
