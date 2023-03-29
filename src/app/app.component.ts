import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csf-routing';

  constructor(private router:Router){

  }

  gotoElephant(){
    console.log("going !");
    this.router.navigate(['/elephant']);

  }
}
