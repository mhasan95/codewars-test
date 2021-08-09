import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {TestService} from '../test.service';

@Component({
  selector: 'app-codingchallenges',
  templateUrl: './codingchallenges.component.html',
  styleUrls: ['./codingchallenges.component.css']
})

export class CodingchallengesComponent implements OnInit {

search: any;
x: string = '';
check : boolean = false;
prime: any;
n: boolean =false;
str1: string = '';

constructor(private testService : TestService) { 
    
}

  isPrime():void {
    this.n = this.testService.checkPrime(this.prime);
    if(this.n==true){
      this.str1 = 'Prime';
    }
    else this.str1 = 'Not Prime';
  }


isValidIP():void {
    this.check = this.testService.checkIP(this.search);
    if(this.check==true){
      this.x= 'Valid IP';
     
    }
    else {
      this.x = 'Invalid IP';
    
    }
  }
  

  ngOnInit(): void{
    Highcharts.chart('container', this.testService.options);
  }

}
