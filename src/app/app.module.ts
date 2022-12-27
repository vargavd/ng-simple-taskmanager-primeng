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

// CUSTOM COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';

// CUSTOM SERVICES
import { ProjectService } from './projects/projects.service';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    PrimeNG_ButtonModule,
    PrimeNG_ToolbarModule,
    PrimeNG_SplitButton,
    PrimeNG_CardModule,
    PrimeNG_TagModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'projects', component: ProjectsComponent }
    ])
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
