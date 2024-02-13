import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-cr',
  templateUrl: './cr.component.html',
  styleUrls: ['./cr.component.css']
})
export class CrComponent {
  @Input("isNew") isNew = "true";
}
