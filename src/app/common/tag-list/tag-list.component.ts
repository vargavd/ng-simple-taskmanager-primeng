// ANGULAR IMPORTS
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// DATA IMPORTS
import { tags } from 'src/app/helper/data';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {
  // INTERACTION
  @Input() selectedTags: string[];
  @Output() selectedTagsChanged = new EventEmitter<string[]>();

  // DATA MODEL
  tagStates = tags.map(tag => ({ tag, checked: false }));

  
  ngOnInit(): void {
    this.selectedTags.forEach(selectedTag => {
      let tagState = this.tagStates.find(tag => tag.tag === selectedTag);

      if (tagState) {
        tagState.checked = true;
      }
    });
  }

  tagsChanged() {
    this.selectedTagsChanged.emit(this.tagStates
      .filter(tagState => tagState.checked)
      .map(tagState => tagState.tag)
    );
  }
}
