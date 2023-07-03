import { Component, OnInit } from '@angular/core';
import { DoctorPatientService } from '../services/doctor-patient.service';

@Component({
  selector: 'app-active-doctor',
  templateUrl: './active-doctor.component.html',
  styleUrls: ['./active-doctor.component.css']
})
export class ActiveDoctorComponent implements OnInit {
  constructor(private service: DoctorPatientService) { }

  public doctors: any[] = [];
  ngOnInit(): void {
    this.service.getAllActiveDoctors().subscribe((data) => {
      this.doctors = data;
    })

  }

}
