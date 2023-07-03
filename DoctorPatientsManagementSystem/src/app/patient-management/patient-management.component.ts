import { Component, OnInit } from '@angular/core';
import { DoctorPatientService } from '../services/doctor-patient.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-patient-management',
  templateUrl: './patient-management.component.html',
  styleUrls: ['./patient-management.component.css']
})
export class PatientManagementComponent implements OnInit {
  constructor(private service: DoctorPatientService, private toast: ToastrService) { }
  public patients: any[] = [];
  errMsg: any = ''

  ngOnInit(): void {
    this.service.getAllPatient().subscribe((data) => {
      this.patients = data;
    }, (error) => {
      this.errMsg = error.error
      console.log(error)
      console.log(this.errMsg)

    })
  }
  deletePatient(id: number) {
    this.toast.info("Patient Deleted")
    this.service.deletePatient(id).subscribe((data) => {
      console.log(data)
      this.ngOnInit()
    })
  }


}
