import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {
    let promise = new Promise( (resolve, reject) => {
      let contador = 0;
      let interval = setInterval( ()=> {
        contador += 1;
        console.log(contador)
        if(contador===3) {
          resolve('ok!'); 
          clearInterval(interval)
        }
      },1000)
    })
    promise.then(
      mensaje => console.log('done!', mensaje)
    )
    .catch( error => console.log('Error in promise', error))

   }

  ngOnInit() {
  }

}
