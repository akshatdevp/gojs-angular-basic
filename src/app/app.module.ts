import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GojsAngularModule } from 'gojs-angular';
import { AppComponent } from './app.component';

import { InspectorComponent } from './inspector/inspector.component';
import { InspectorRowComponent } from './inspector/inspector-row.component';
import { IVRTREEComponent } from './ivr-tree/ivr-tree.component';


@NgModule({
  declarations: [
    AppComponent,
    InspectorComponent,
    InspectorRowComponent,
    IVRTREEComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    GojsAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
