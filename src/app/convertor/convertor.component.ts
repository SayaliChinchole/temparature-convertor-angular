import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.css']
})
export class ConvertorComponent implements OnInit {

  celcius :number;
  farenheit : number;

  constructor() { }

  ngOnInit(): void {
    this.celcius = 10;
    this.convertToFarenheit(this.celcius);
  }

  // tslint:disable-next-line: typedef
 convertToCelcius(f:number) {
     this.celcius = Math.floor( (f - 32) * (5 / 9));
  }
  convertToFarenheit(c:number) {
    this.farenheit = Math.floor( (c * 9 / 5 ) + 32);
}


}
