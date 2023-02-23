import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngTaskio';

  today = new Date()


  getImagePath(): string {
    return "https://cdn.pixabay.com/photo/2023/02/06/01/14/superb-fairywren-7770904_960_720.jpg"
  }

  getTaskById(id: number): string {
    const tasks = [
      'Your first task', 
      'Asecond task', 
      'Another task'
    ]

    return tasks[id]
  }
}
