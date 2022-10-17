import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  opened = false;

  toggleSidebar(){
    this.opened = !this.opened;
  }

  nameUser = sessionStorage.getItem('name')

  constructor() { }

  ngOnInit(): void {
    console.log(this.nameUser+"=========")

  }

}