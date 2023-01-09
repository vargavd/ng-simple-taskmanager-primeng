// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// PRIMENG MODULES
import { ButtonModule as PrimeNG_ButtonModule } from 'primeng/button';
import { ToolbarModule as PrimeNG_ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule as PrimeNG_SplitButton } from 'primeng/splitbutton';
import { CardModule as PrimeNG_CardModule } from 'primeng/card';
import { TagModule as PrimeNG_TagModule } from 'primeng/tag';
import { PanelModule as PrimeNG_PanelModule } from 'primeng/panel';
import { DividerModule as PrimeNG_DividerModule } from 'primeng/divider';
import { DataViewModule as PrimeNG_DataViewModule } from 'primeng/dataview';
import { ChartModule as PrimeNG_ChartModule } from 'primeng/chart';


// CUSTOM COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { HomeComponent } from './home/home.component';
import { ProjectListItemComponent } from './projects/project-list-item/project-list-item.component';
import { TaskListItemComponent } from './tasks/task-list-item/task-list-item.component';
import { StatusIndicatorComponent } from './common/status-indicator/status-indicator.component';

// CUSTOM SERVICES
import { DataService } from './data.service';
import { ProjectPageComponent } from './projects/project-page/project-page.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    HomeComponent,
    ProjectListItemComponent,
    TasksComponent,
    TaskListItemComponent,
    StatusIndicatorComponent,
    ProjectPageComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    PrimeNG_ButtonModule,
    PrimeNG_ToolbarModule,
    PrimeNG_SplitButton,
    PrimeNG_CardModule,
    PrimeNG_TagModule,
    PrimeNG_PanelModule,
    PrimeNG_DividerModule,
    PrimeNG_DataViewModule,
    PrimeNG_ChartModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'projects/:projectId', component: ProjectPageComponent },
      { path: 'tasks', component: TasksComponent }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
