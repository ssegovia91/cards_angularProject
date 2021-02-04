import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Tree',
      imageUrl: 'assets/tree.jpeg',
      userName: '@nature',
      content: 'I saw a tree'
    },
    {
      title: 'Mountain',
      imageUrl: 'assets/mountain.jpeg',
      userName: '@mounter',
      content: 'I like the mountain'
    },
    {
      title: 'Bike',
      imageUrl: 'assets/biking.jpeg',
      userName: '@biker',
      content: 'I like to do bike'
    }
  ]
}
