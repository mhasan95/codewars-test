
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
  count: number=0;
  names:Array<string> = ['Alex','bob','Peter','Jane','Roy','Kekre'];
  mssg: string = '';
  legend:number=0;
  products:Array<any> = [{name: 'LG', price: 600, id:1 }, {name: 'Samsung', price: 200, id:2 } ];

constructor(public testService : TestService) { }

onlike(reaction : string){
  if(reaction=='like')
  this.count++;
  else{
    if(this.count<=0){
      this.count=0;
    }
    else
    this.count--;
  }
  
 
  this.legend = this.count -2;
  this.mssg = this.testService.liked(this.count, this.legend,this.names);

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
