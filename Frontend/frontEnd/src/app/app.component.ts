import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeModel } from './model';
import { EmployeeServiceService } from './employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontEnd';
  // employeeItem = new EmployeeModel("","","",0);

constructor(private fb:FormBuilder,private employeeserviceservice:EmployeeServiceService,private router: Router) { }
submit=false;
registrationForm = this.fb.group({
  employeename:['',[Validators.required,Validators.pattern('^[a-zA-Z \'-]+$')]],
  position:[''],
  officelocation:[''],
  salary:['',[Validators.required,Validators.pattern('[0-9]{3,7}')]]
})
get f(){
  return this.registrationForm.controls;
}
onsubmit(){
   this.submit = true
   this.employeeserviceservice.addEmployees((this.registrationForm.value))
   alert("new employee added")
   console.log('clicked')
  // this.router.navigate(['/'])
  console.log('f', this.f)
 
}

ngOnInit(): void {
  
}
}