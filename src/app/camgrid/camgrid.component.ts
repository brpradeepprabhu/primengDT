import { Component, OnInit,AfterViewInit,Input,Output,ViewChild } from '@angular/core';
import {DataTableModule,SharedModule} from 'primeng/primeng'
import {DataTable} from "primeng/primeng";
import {DomSanitizer} from '@angular/platform-browser';
import {CommonModule} from '@angular/common'
@Component({
  selector: 'cam-grid',
  templateUrl: './camgrid.component.html',
  styleUrls: ['./camgrid.component.css']
})
export class CAMGridComponent implements OnInit {

  @Input() data = [];
  @Input() columns = [];
  @ViewChild(DataTable) DataTableNG:DataTable;
  api:any = {};

  constructor(private domSan:DomSanitizer) {
  }

  ngOnInit() {
    this.data = (this.api.data) ? this.api.data : [];
    this.columns = (this.api.columns) ? this.api.columns : [];
    for (let i = 0; i < this.columns.length; i++) {
      this.columns[i].sortable = this.columns[i].sortable == "true" || this.columns[i].sortable == true;
      this.columns[i].filter = this.columns[i].filter == "true" || this.columns[i].filter == true;
      this.columns[i].frozen = this.columns[i].frozen == "true" || this.columns[i].frozen == true;
      this.columns[i].hidden = this.columns[i].hidden == "true" || this.columns[i].hidden == true;
      this.columns[i].sortField = (this.columns[i].sortField == "" || this.columns[i].hidden) ? this.columns[i].field : this.columns[i].sortField;
      this.columns[i].expander = this.columns[i].expander == "true" || this.columns[i].expander == true;
      this.columns[i].template = this.columns[i].template ? this.domSan.bypassSecurityTrustHtml(this.columns[i].template) : undefined;
    }
  }

  clickDiv() {
    alert("inside")
  }
}
