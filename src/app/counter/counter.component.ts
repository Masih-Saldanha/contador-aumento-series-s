import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter: string = 'XX dias, XX horas, XX minutos, XX segundos';

  ngOnInit() {
    const referenceDate = new Date('2023-10-27T00:00:00');
    
    setInterval(() => {
      const now = new Date();
      const DifferenceInMiliseconds = now.getTime() - referenceDate.getTime();
      const seconds = Math.floor(DifferenceInMiliseconds / 1000);
      const days = Math.floor(seconds / 86400);
      const hours = Math.floor((seconds % 86400) / 3600);
      const minutes = Math.floor(((seconds % 86400) % 3600) / 60);
      const secondsLeft = seconds % 60;
      
      this.counter = `${days} dias, ${hours} horas, ${minutes} minutos, ${secondsLeft} segundos`;
    }, 1000);
  }
}
