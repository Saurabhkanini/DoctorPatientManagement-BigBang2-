import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorPatientService } from '../services/doctor-patient.service';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private service: DoctorPatientService) { }
  doctorId: string | null = '';
  doctor: any = {};

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.doctorId = param.get('id')
      console.log(this.doctorId)
    });
    if (this.doctorId !== null)
      this.service.getDoctor(parseInt(this.doctorId)).subscribe((data) => {
        this.doctor = data;
        console.log(this.doctor)
      })


  }

}
