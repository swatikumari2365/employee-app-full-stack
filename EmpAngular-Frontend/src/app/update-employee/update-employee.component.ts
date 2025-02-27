import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../employee-service.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee=new Employee();
  id!: number;
  constructor(private employeeService:EmployeeService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe((data: Employee)=> {
      this.employee=data;
    },(error: any)=>console.log(error));
  }

  onSubmit(){
    this.employeeService.updateEmployeeById(this.id,this.employee).subscribe(data=>{
      this.goToEmployeeList();
    },error=>console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

}
