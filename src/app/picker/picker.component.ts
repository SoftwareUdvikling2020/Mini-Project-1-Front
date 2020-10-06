import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.css']
})
export class PickerComponent implements OnInit {

  constructor(
    private dataService: DataService,
  ) { }
  value: number;
  converter: string;
  return: string = "Convert Temperature Here!";

  ngOnInit(): void {
  }

  getAnswer(): void {
    this.dataService.getCalc(this.converter, this.value).subscribe((data) => {
      if(this.converter === "getFahr/") {
        this.return = this.value +" celsius is "+ data.fahrenheit.toFixed(2) +" fahrenheit."
      }
      if(this.converter === "getCel/") {
        this.return = this.value +" fahrenheit is "+ data.celsius.toFixed(2) +" celsius.";
      }
    });
    
  }

}
