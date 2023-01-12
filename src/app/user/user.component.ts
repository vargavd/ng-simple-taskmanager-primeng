import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  // helper
  devLevels: string[] = ['Junior', 'Medior', 'Senior', 'Lead'];

  constructor() { }

  ngOnInit(): void {
  }

  onSave() {
    console.log('save clicked');
  }
}
