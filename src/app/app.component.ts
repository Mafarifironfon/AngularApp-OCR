import {Component, OnInit, OnDestroy} from '@angular/core';
import {AppareilService} from './services/appareil.service';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Rx';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.sass']})

export class AppComponent implements OnInit, OnDestroy {

    secondes : number;
    counterSubscrition : Subscription;

    constructor() {}

    ngOnInit() {
        const counter = Observable.interval(1000)
        this.counterSubscrition = counter.subscribe((value: number) => {
            this.secondes = value
        })
    }
    ngOnDestroy(){
      this.counterSubscrition.unsubscribe
    }
}
