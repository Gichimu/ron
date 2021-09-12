import { Component, HostListener, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggle = false;
  isMobile = false;
  screenWidth = window.innerWidth
  constructor() { }

  ngOnInit(): void {
    
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    this.screenWidth <= 768 ? this.isMobile = true : this.isMobile = false
    console.log(this.screenWidth)
  }
  toggleMenu() {
    this.toggle = !this.toggle
  }
}
