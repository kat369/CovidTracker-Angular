import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { ListViewComponent } from './body/components/list-view/list-view.component';
import {HttpClientModule} from '@angular/common/http';
import { GridViewComponent } from './body/components/grid-view/grid-view.component';
import { TabelActionsComponent } from './body/components/tabel-actions/tabel-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    ListViewComponent,
    GridViewComponent,
    TabelActionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
