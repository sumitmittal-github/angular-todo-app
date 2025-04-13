import { Component, signal, input } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';

@Component({
  selector: 'app-body',
  imports: [GreetingComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  greeting_from_parent = input('Default greeting message from body component');

}