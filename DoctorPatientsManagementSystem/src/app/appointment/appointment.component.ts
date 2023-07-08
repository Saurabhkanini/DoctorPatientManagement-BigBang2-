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
  role: string | null = null

  appointments: any[] = []
  doc: any = {}
  ngOnInit(): void {
    this.service.getAllAppoint().subscribe((data) => {
      this.appointments = data;
      console.log(data)
    }, (err) => {
      this.errMsg = err.error;
      console.log(err)
    })
    console.log(this.errMsg)
    this.getDoctor()
    console.log(this.doc)
    this.role = localStorage.getItem('role')


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
  getDoctor() {
    let docName = localStorage.getItem('docname')
    if (docName != null) {
      this.service.getDocByName(docName).subscribe((data) => {
        console.log(data)
        this.doc = data;
      })
    }
  }

}
