import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent {


  GitHub(){
    window.open('https://github.com/lionezel')
  }

  linKeDin(){
    window.open('https://www.linkedin.com/in/miguel-angel-barrera-ospina-584605284/')
  }
}
