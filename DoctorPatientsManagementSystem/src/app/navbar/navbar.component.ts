import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DoctorPatientService } from '../services/doctor-patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private service: DoctorPatientService, private router: Router) { }
  userName: string | null = null;
  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
  }

  Login() {
    this.router.navigate(['home/login'])

  }
  Logout() {
    localStorage.clear();
    this.router.navigate(['home/login'])

  }

}
