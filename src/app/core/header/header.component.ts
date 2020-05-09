import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'pl-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


    constructor(private router: Router) {

    }

    home() {
        this.router.navigate(['']);
    }
}