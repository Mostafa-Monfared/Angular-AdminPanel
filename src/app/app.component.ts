import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  
  ngAfterViewInit(): void {
    this.checkScroll();
  }

  checkScroll(): void {
    const windowHeight = window.innerHeight;
    const contentHeight = document.documentElement.scrollHeight;

    if (contentHeight > windowHeight) {
      document.documentElement.style.overflow = 'auto';
    } else {
      document.documentElement.style.overflow = 'hidden';
    }
  }
}
