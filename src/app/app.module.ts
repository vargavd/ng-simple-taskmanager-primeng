// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
import { InputTextModule as PrimeNG_InputTextModule } from 'primeng/inputtext';
import { DropdownModule as PrimeNG_DropdownModule } from 'primeng/dropdown';
import { EditorModule as PrimeNG_EditorModule } from 'primeng/editor';

// CUSTOM COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { HomeComponent } from './home/home.component';
import { ProjectListItemComponent } from './projects/project-list-item/project-list-item.component';
import { TaskListItemComponent } from './tasks/task-list-item/task-list-item.component';
import { StatusIndicatorComponent } from './common/status-indicator/status-indicator.component';
import { ProjectPageComponent } from './projects/project-page/project-page.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { UserComponent } from './user/user.component';

// CUSTOM SERVICES
import { DataService } from './data.service';
import { UserService } from './user/user.service';
import { AuthGuard } from './auth-guard.service';


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
    TaskListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    PrimeNG_ButtonModule,
    PrimeNG_ToolbarModule,
    PrimeNG_SplitButton,
    PrimeNG_CardModule,
    PrimeNG_TagModule,
    PrimeNG_PanelModule,
    PrimeNG_DividerModule,
    PrimeNG_DataViewModule,
    PrimeNG_ChartModule,
    PrimeNG_InputTextModule,
    PrimeNG_DropdownModule,
    PrimeNG_EditorModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'projects/:projectId', component: ProjectPageComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'user', component: UserComponent, canActivate: [AuthGuard] }
    ])
  ],
  providers: [DataService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
