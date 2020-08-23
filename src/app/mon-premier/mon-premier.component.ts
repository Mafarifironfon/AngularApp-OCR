import {Component, OnInit, Input} from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({selector: 'app-mon-premier', templateUrl: './mon-premier.component.html', styleUrls: ['./mon-premier.component.sass']})
export class MonPremierComponent implements OnInit {

    @Input()appareilName : string;
    @Input()appareilStatus : string
    @Input()indexOfAppareil : number
    @Input()id: number

    constructor(private appareilService : AppareilService) {}

    ngOnInit() : void {}

    getStatus() {
        return this.appareilStatus;
    }

    getColor() {
        if (this.appareilStatus === 'Allumé') {
            return 'green'
        } else if (this.appareilStatus === 'éteint') {
            return 'red'
        }
    }

    onSwitchOn() {
        this
            .appareilService
            .switchOnOne(this.indexOfAppareil)
    }

    onSwitchOff() {
        this
            .appareilService
            .switchOffOne(this.indexOfAppareil)
    }
}
