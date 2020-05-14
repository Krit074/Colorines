import { Component, HostListener } from '@angular/core';

@Component({
  templateUrl: './masterpage.component.html',
  styleUrls: ['masterpage.component.css']
})


export class MasterPageComponent {
  
  constructor( ) {
      document.getElementById('loadingScreen').setAttribute('hidden', 'true');
    }

  ngOnInit() {
  }
}
