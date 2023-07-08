import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DoctorPatientService {

  constructor(private http: HttpClient, private router: Router) { }
  registerUser(data: any): Observable<any> {
    let url: string = 'https://localhost:7050/api/Auth/register';
    return this.http.post<any>(url, data)
  }
  loginUser(data: any): Observable<any> {
    let dataurl2: string = `https://localhost:7050/api/Auth/login`;
    return this.http.post<any>(dataurl2, data);
  }
  storeToken(mytoken: string) {
    localStorage.setItem('token', mytoken)
  }
  getToken() {
    return localStorage.getItem('token')
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  signout() {
    localStorage.clear();
    this.router.navigate(['home']);
  }
  getAllDoctors(): Observable<any> {
    let dataurl = 'https://localhost:7050/api/Doctors';
    return this.http.get<any>(dataurl);
  }
  addDoctor(data: any): Observable<any> {
    let dataurl = 'https://localhost:7050/api/Doctors';
    return this.http.post<any>(dataurl, data);

  }
  deleteDoctor(id: number): Observable<any> {
    let dataurl = `https://localhost:7050/api/Doctors/${id}`
    return this.http.delete<any>(dataurl);
  }
  getDoctor(id: number): Observable<any> {
    let dataurl = `https://localhost:7050/api/Doctors/${id}`
    return this.http.get<any>(dataurl);
  }
  updateDoctor(id: number, data: any): Observable<any> {
    let dataurl = `https://localhost:7050/api/Doctors/${id}`
    return this.http.put<any>(dataurl, data);
  }
  getAllActiveDoctors(): Observable<any> {
    let dataurl = 'https://localhost:7050/api/Doctors/ActiveDoctors'
    return this.http.get(dataurl);
  }
  changeStatus(id: number): Observable<any> {
    let dataurl = `https://localhost:7050/api/Doctors/api/doctor/change-status/${id}`
    return this.http.put<any>(dataurl, id)
  }
  getDocByName(name: string): Observable<any> {
    let dataurl = `https://localhost:7050/api/Doctors/name/${name}`
    return this.http.get<any>(dataurl);
  }
  //PAtient services
  getAllPatient(): Observable<any> {
    let dataurl = 'https://localhost:7050/api/Patient'
    return this.http.get<any>(dataurl)
  }
  addPatient(data: any): Observable<any> {
    let dataurl = 'https://localhost:7050/api/Patient';
    return this.http.post<any>(dataurl, data);

  }
  getPatient(id: number): Observable<any> {
    let dataurl = `https://localhost:7050/api/Patient/${id}`
    return this.http.get<any>(dataurl);

  }
  updatePatient(id: number, data: any): Observable<any> {
    let dataurl = `https://localhost:7050/api/Patient/${id}`
    return this.http.put<any>(dataurl, data)
  }
  deletePatient(id: number): Observable<any> {
    let dataurl = `https://localhost:7050/api/Patient/${id}`
    return this.http.delete<any>(dataurl);
  }
  //appointment services
  addAppoint(data: any): Observable<any> {
    let dataurl = 'https://localhost:7050/api/Appointment'
    return this.http.post<any>(dataurl, data);
  }
  getAllAppoint(): Observable<any> {
    let dataurl = 'https://localhost:7050/api/Appointment'
    return this.http.get<any>(dataurl);
  }
  deleteAppoint(id: number): Observable<any> {
    let dataurl = `https://localhost:7050/api/Appointment/${id}`
    return this.http.delete<any>(dataurl);
  }
}
