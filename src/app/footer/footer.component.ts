import { Component, Input } from '@angular/core';
// import { DevName } from '../app.component'



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  @Input() developerName = {
    name: ''
  }

  currentDate = new Date()
}
