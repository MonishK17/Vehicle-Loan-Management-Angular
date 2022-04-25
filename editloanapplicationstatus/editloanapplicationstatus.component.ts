import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanApplication } from '../loanapplication';
import { VehicleLoanService } from '../vehicle-loan.service';
@Component({
  selector: 'app-editloanapplicationstatus',
  templateUrl: './editloanapplicationstatus.component.html',
  styleUrls: ['./editloanapplicationstatus.component.css']
})
export class EditloanapplicationstatusComponent implements OnInit {
  chassisNumber : number = 0;
  loanapplication : LoanApplication = new LoanApplication();
  submitted = false;
  constructor(private route : ActivatedRoute, private router : Router, private loanService: VehicleLoanService) { }

  ngOnInit(): void {
    this.loanapplication = new LoanApplication();
    this.chassisNumber = this.route.snapshot.params['chassisNumber'];
    this.loanService.getLoanApplication(this.chassisNumber).subscribe(data => {
      this.loanapplication = data;
    });
  }
  
  modifyLoanApplicationStatus(){
    this.loanService.modifyLoanApplicationStatus(this.chassisNumber, this.loanapplication).subscribe(data => {
      this.loanapplication = new LoanApplication();
      this.gotoList();
    });
  }
  
  gotoList() {
    this.router.navigate(['/adminPage']);
  }

  onSubmit() {
    this.submitted = true;
    this.modifyLoanApplicationStatus();
  }
}