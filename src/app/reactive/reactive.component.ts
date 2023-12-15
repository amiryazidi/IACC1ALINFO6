import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  login=new FormControl('',Validators.required);
  pwd=new FormControl('',[Validators.required,Validators.minLength(6)]);

  registerForm=new FormGroup(
    {
    fn:new FormControl('',[Validators.required,Validators.minLength(3)]),
    ln:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    ad:new FormControl('',Validators.required),
  }
  )
  reset(){
    this.login.reset();
  }

  showLogin(){
    console.log(this.login.value);
  }
  formBuilder:any
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formBuilder=this.fb.group(
      {fn:['',[Validators.required,Validators.minLength(3)]],
      ln:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      ad:['',Validators.required]});

    }
  }