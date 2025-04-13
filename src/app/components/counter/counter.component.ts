import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  counterValue = signal(0);

  incrementCounterEvent(){
    this.counterValue.update( val => val+1 );
  }

  decrementCounterEvent(){
    this.counterValue.update( val => val-1 );
  }

  resetCounterEvent(){
    this.counterValue.set(0);
  }

}