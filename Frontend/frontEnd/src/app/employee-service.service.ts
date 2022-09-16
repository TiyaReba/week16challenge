import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }


  addEmployees(item:any){
    console.log("inside addemployees")
    return this.http.post('http://localhost:3000/insert',{item})
     .subscribe(data =>{console.log(data)})

  }
  
}
