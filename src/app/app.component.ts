import { Component,ViewChild,AfterViewInit,OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {NameService} from './name.service'
import {CAMGridComponent} from "./camgrid/camgrid.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,  AfterViewInit {
  title = 'app';
  @ViewChild(CAMGridComponent) CamGridApi:CAMGridComponent;

  constructor(private nameService:NameService) {

  };

  ngOnInit() {
    this.CamGridApi.api = {
      data: this.nameService.nameData,
      columns: [
        {field: 'index', header: 'index', sortField: 'index', sortable: true, filter: 'true',expander:false,
          template:'<span>ppp</span>'},
        {field: 'name', header: 'Name', sortField: '', sortable: "true", filter: true, frozen: true},
        {field: 'age', header: 'Age', sortField: '', filter: ''},
        {field: 'gender', header: 'Gender', sortField: '', sortable: true, filter: 'true'},
        {field: 'guid', header: 'GuID', sortField: '', sortable: true, filter: 'true'},
        {field: 'company', header: 'Company', sortField: '', sortable: true, filter: 'true'},
        {field: 'eyeColor', header: 'EyeColor', sortField: '', sortable: true, filter: 'true'},
        {field: 'balance', header: 'Balance', sortField: '', sortable: true, filter: 'true', hidden: 'true'}
      ]

    };
  }

  clickDiv() {
    alert("pradeep")
  }

  ngAfterViewInit() {

  }
}
