import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MetaTableComponent } from './meta-table/meta-table.component';
import { ElementFrameComponent } from './element-frame/element-frame.component';
import { CirclePackComponent } from './circle-pack/circle-pack.component';

@NgModule({
  declarations: [
    AppComponent,
    MetaTableComponent,
    ElementFrameComponent,
    CirclePackComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [ CirclePackComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
