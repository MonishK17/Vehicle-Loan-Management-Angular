import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleLoanService {
  private baseUrl = 'http://localhost:8081/vehicleloan/login';
  constructor(private http: HttpClient) {}
  user = {
    email: 'monishk@gmail.com',
  };
  
  verifyUser(login: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}/checkuser`, login);
  }
  

  registerUser(register: Object) {
    return this.http.post(`${this.baseUrl}/user/newuser`, register);
  }

  getAllLoanApplication() {
    return this.http.get(
      `${this.baseUrl}/user/getLoanApplication/${this.user.email}`
    );
  }

  getUserRegistrationDetails() {
    return this.http.get(
      `${this.baseUrl}/user/getUserRegistration/${this.user.email}`
    );
  }

  getUserDetails() {
    return this.http.get(
      `${this.baseUrl}/user/getUserDetails/${this.user.email}`
    );
  }
 
  verifyAdmin(login: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}/checkadmin`, login);
  }

  registerAdmin(adminregister: Object) {
    return this.http.post(`${this.baseUrl}/admin/newadminregister`, adminregister);
  }
  
  getAdminRegistrationDetails() {
    return this.http.get(
      `${this.baseUrl}/admin/getadmindetails/${this.user.email}`
    );
  }

  findAllUserRegistrationDetails(){
    return this.http.get(
      `${this.baseUrl}/admin/registeredusers`);
  }

  findAllAcceptedLoanApplications(){
    return this.http.get(
      `${this.baseUrl}/admin/acceptedloanapps`);
  }

  findAllRejectedLoanApplications(){
    return this.http.get(
      `${this.baseUrl}/admin/rejectedloanapps`);
  }

  findAllApprovedUsers(){
    return this.http.get(
      `${this.baseUrl}/admin/approvedusers`);
  }

  findAllRejectedUsers(){
    return this.http.get(
      `${this.baseUrl}/admin/rejectedusers`);
  }

  findAllPendingUsers(){
    return this.http.get(
      `${this.baseUrl}/admin/pendingusers`);
  }

  getLoanApplication(chassisNumber:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/user/loanapp/chassisno/${chassisNumber}`);
  }

  modifyLoanApplicationStatus(chassisNumber:number,value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/admin/update/${chassisNumber}`,value);
  } 

  getLoanApplicationList():Observable<any>{
    return this.http.get(
      `${this.baseUrl}/user/getloanapplication`);
  }

  getUserDetailByEmail(email:string){
    return this.http.get(
      `${this.baseUrl}admin/getAccount/${email}`
    );
  }

}
