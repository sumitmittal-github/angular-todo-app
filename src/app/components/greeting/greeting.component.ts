import { Component, signal, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent {
  greeting_from_parent_component = input('Default greeting message from greeting component');
  greeting_from_self_component = signal('greeting message from self component');

  keyupHandlerGreeting(event : KeyboardEvent){
    console.log(`User pressed : ${event.key}`);
  }

} 