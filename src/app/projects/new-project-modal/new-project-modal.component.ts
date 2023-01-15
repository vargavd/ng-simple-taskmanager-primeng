// ANGULAR IMPORTS
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

// CUSTOM SERVICES
import { DataService } from 'src/app/data.service';
import { Project } from 'src/app/helper/data';


@Component({
  selector: 'app-new-project-modal',
  templateUrl: './new-project-modal.component.html',
  styleUrls: ['./new-project-modal.component.scss']
})
export class NewProjectModalComponent {
  title: string;
  description: string;
  tags: string[];

  @Input() modalVisible: boolean;
  @Output() cancelModal = new EventEmitter<boolean>();

  @ViewChild('titleInput') titleInput: NgModel;
  @ViewChild('descriptionInput') descriptionInput: NgModel;

  constructor(
    private dataService: DataService,
    private router: Router
  ) { 
    this.title = '';
    this.description = '';
    this.tags = [];
  }

  onSave() {
    if (!this.title || !this.description) {
      this.titleInput.control.markAsTouched();
      this.descriptionInput.control.markAsTouched();
      
      return;
    }

    const projectId = this.dataService.addProject(this.title, this.description, this.tags);

    // this.router.navigate(['/projects', projectId]);
  }

  onCancel() {
    // reset values
    this.title = '';
    this.description = '';

    // reset validity
    this.titleInput.reset();
    this.descriptionInput.reset();


    this.cancelModal.emit(true);
  }

}
