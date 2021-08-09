import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  checkIP(str: string) : boolean {
    var a = str.split('.');
    if(a.length< 4||a.length>4)
    return false;
    var check =true;
    for(var i=0;i<a.length;i++){
      var x = parseInt(a[i]);
      if(x<=255&&x>=0){
       continue;
      }
      else{
          check = false;
      }
    }
    if (check == true){
      return true;
    }
    else{
      return false;
    }
  }

  public options: any = {
    title: {
      text: 'Solar Employment Growth by Sector, 2010-2016'
  },
  
  subtitle: {
      text: 'Source: thesolarfoundation.com'
  },
  
  yAxis: {
      title: {
          text: 'Number of Employees'
      }
  },
  
  xAxis: {
      accessibility: {
          rangeDescription: 'Range: 2010 to 2017'
      }
  },
  
  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
  },
  
  plotOptions: {
      series: {
          label: {
              connectorAllowed: false
          },
          pointStart: 2010
      }
  },
  
  series: [{
      name: 'Installation',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
  }, {
      name: 'Manufacturing',
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
  }, {
      name: 'Sales & Distribution',
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
  }, {
      name: 'Project Development',
      data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
  }, {
      name: 'Other',
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
  }],
  
  responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'bottom'
              }
          }
      }]
  }
  }

  checkPrime(num:number){
    if(num <= 1)
    return false;
    var isprime = true;
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) 
        isprime = false;

        if(isprime === false){
       return false; }
        else return true;

}

}
