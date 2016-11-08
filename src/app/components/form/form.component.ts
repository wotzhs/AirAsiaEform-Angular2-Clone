import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})

export class FormComponent implements OnInit {
  @Input() lang:string;
  ngOnInit(){
    console.log(this.lang)
  }
}
