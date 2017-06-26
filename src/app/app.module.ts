import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import {DataTableModule,SharedModule,ConfirmDialogModule,ConfirmationService,CalendarModule} from 'primeng/primeng'
import { AppComponent } from './app.component';
import { CAMGridComponent } from './camgrid/camgrid.component';
import {NameService} from './name.service'
@NgModule({
  declarations: [
    AppComponent,
    CAMGridComponent
  ],
  imports: [
    BrowserModule,CommonModule,CalendarModule,
    DataTableModule,
    SharedModule
  ],
  providers: [NameService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
