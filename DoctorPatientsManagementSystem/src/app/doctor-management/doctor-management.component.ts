import { Component, OnInit } from '@angular/core';
import { DoctorPatientService } from '../services/doctor-patient.service';

@Component({
  selector: 'app-doctor-management',
  templateUrl: './doctor-management.component.html',
  styleUrls: ['./doctor-management.component.css']
})
export class DoctorManagementComponent implements OnInit {
  constructor(private service: DoctorPatientService) { }
  public doctors: any[] = [];
  errMsg: any = ''

  ngOnInit(): void {
    this.service.getAllDoctors().subscribe((data) => {
      this.doctors = data;
    }, (error) => {
      this.errMsg = error.error
      console.log(error)
      console.log(this.errMsg)

    })
  }
  deleteDoctor(id: number) {
    alert("Are You Sure")
    this.service.deleteDoctor(id).subscribe((data) => {
      console.log(data)
    })
  }
  ChangeStatus(id: number) {
    this.service.changeStatus(id).subscribe((data) => {
      console.log(data)
      this.ngOnInit();
    })
  }

}
