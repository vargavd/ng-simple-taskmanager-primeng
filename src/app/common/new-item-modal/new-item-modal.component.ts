// ANGULAR IMPORTS
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

// CUSTOM SERVICES
import { DataService } from 'src/app/data.service';
import { Project, Task } from 'src/app/helper/data';


@Component({
  selector: 'app-new-item-modal',
  templateUrl: './new-item-modal.component.html',
  styleUrls: ['./new-item-modal.component.scss']
})
export class NewItemModalComponent {
  title: string;
  description: string;
  tags: string[];

  @Input() modalVisible: boolean;
  @Input() itemType: 'TASK' | 'PROJECT';
  @Input() projectId: number; // in case the new item is a task
  @Output() cancelModal = new EventEmitter<void>();
  @Output() closeModal = new EventEmitter<void>();

  @ViewChild('titleInput') titleInput: NgModel;
  @ViewChild('descriptionInput') descriptionInput: NgModel;

  // private helper funcs
  resetForm() {
    // reset values
    this.title = '';
    this.description = '';

    // reset validity
    this.titleInput.reset();
    this.descriptionInput.reset();
  }

  constructor(
    private dataService: DataService,
    private router: Router
  ) { 
    this.title = '';
    this.description = '';
    this.tags = [];
  }

  onSave() {
    // validation if they are untouched
    if (!this.title || !this.description) {
      this.titleInput.control.markAsTouched();
      this.descriptionInput.control.markAsTouched();
      
      return;
    }

    
    if (this.itemType === 'TASK') {
      // ADDING TASK
      this.dataService.addTask(this.projectId, this.title, this.description);

      this.resetForm();

      this.closeModal.emit();
    } else {
      // ADDING PROJECT
      const projectId = this.dataService.addProject(this.title, this.description, this.tags);

      this.router.navigate(['/projects', projectId, 'edit']);
    }
    
  }

  onCancel() {
    this.resetForm();

    this.cancelModal.emit();
  }

}
