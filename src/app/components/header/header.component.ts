import { Component, signal, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title_from_parent = input('title_from_parent');
  sub_title_from_self = signal('sub title from self');

}