import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleLoanService } from '../vehicle-loan.service';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {
  register = {
    adminFullName: '',
    adminEmail: '',
    adminPassword: '',
    
    
  };
  route: any;
  constructor(private loanService: VehicleLoanService) { }

  ngOnInit(): void {}

  onSubmit() {
    this.loanService.registerAdmin(this.register).subscribe(
      (data) => {
        if (data != null) {
          alert('Admin Successfully Registered');
          this.gotoAdminPage();
        }
      },
      (error) => console.log(error)
    );
  }
  gotoAdminPage() {
    this.route.navigate(['/adminPage']);
  }
}
