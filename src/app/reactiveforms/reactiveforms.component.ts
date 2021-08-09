import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MyForm } from './MyForm';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  model = new MyForm('',0,'','');

  submitted = false;

  onSubmit() { this.submitted = true; console.log('submitted',this.model);}

  constructor() { 


  }

  ngOnInit(): void {
  }

}

