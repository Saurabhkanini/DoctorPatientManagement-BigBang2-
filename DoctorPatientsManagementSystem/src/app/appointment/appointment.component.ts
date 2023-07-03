import { Component, OnInit } from '@angular/core';
import { DoctorPatientService } from '../services/doctor-patient.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  constructor(private service: DoctorPatientService, private toast: ToastrService) { }
  errMsg: any = ''

  appointments: any[] = []

  ngOnInit(): void {
    this.service.getAllAppoint().subscribe((data) => {
      this.appointments = data;
      console.log(data)
    }, (err) => {
      this.errMsg = err.error;
      console.log(err)
    })
    console.log(this.errMsg)

  }
  accept(id: number) {
    this.service.deleteAppoint(id).subscribe((data) => {
      this.toast.success('Appointment accepted')
    })
  }
  reject(id: number) {
    this.service.deleteAppoint(id).subscribe((data) => {
      this.toast.success('Appointment Rejected')
    })
  }

}
