import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import  { retry, map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    this.subscription = this.returnObservable().pipe(
      retry(2) // 2 es el numero de intents
    )
    .subscribe( 
      num   => { console.log('num subs', num) },
      error => { console.log('num error', error) },
      ()    => { console.log('observer end up!') }
    );  
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  returnObservable(): Observable<any> {
    //una promise te metodes resolve i reject,
    //un observable te el métode observer que es del tipus <subscribe> 
    return new Observable( (observer: Subscriber<any>) => {
      let counter = 0;
        let interval = setInterval( () => {
          counter += 1;
          const ouputCount = {
            value: counter
          }
          observer.next(ouputCount);
        /*  if(counter === 3) {
            clearInterval(interval);
             observer.complete();
          }
          if(counter === 2) {
            clearInterval(interval); 
            observer.error('argg!');
          } */
        },1000)
    }).pipe(
      map(res => {
        return res.value}
      ),
      filter((value,index) => {
        if( (value % 2) === 1){
          return true;
        } else {
          return false;
        }
      })
    )
  }

}
