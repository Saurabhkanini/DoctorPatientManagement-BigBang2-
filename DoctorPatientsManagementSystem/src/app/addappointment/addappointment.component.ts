import { Component } from '@angular/core';
import { DoctorPatientService } from '../services/doctor-patient.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addappointment',
  templateUrl: './addappointment.component.html',
  styleUrls: ['./addappointment.component.css']
})
export class AddappointmentComponent {
  constructor(private service: DoctorPatientService, private toast: ToastrService) { }
  appointment: any = {
    title: '',
    patientName: '',
    date: '',
    isuue: '',
  }
  submitForm() {
    console.log(this.appointment)
    this.service.addAppoint(this.appointment).subscribe((data) => {
      console.log(data)
      this.toast.success('Appointment Booked')
    })


  }

}
