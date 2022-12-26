import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

// PRIMENG MODULES
import { ButtonModule as PrimeNG_ButtonModule } from 'primeng/button';
import { ToolbarModule as PrimeNG_ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule as PrimeNG_SplitButton } from 'primeng/splitbutton';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    PrimeNG_ButtonModule,
    PrimeNG_ToolbarModule,
    PrimeNG_SplitButton,

    RouterModule.forRoot([
      { path: '', component: AppComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
