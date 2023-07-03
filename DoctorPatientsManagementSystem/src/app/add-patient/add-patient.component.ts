import { Component } from '@angular/core';
import { DoctorPatientService } from '../services/doctor-patient.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  constructor(private service: DoctorPatientService, private toast: ToastrService, private router: Router) { }
  addPatient: any = {
    pname: '',
    pissue: '',
    plocation: ''
  }


  AddPatient() {
    this.service.addPatient(this.addPatient).subscribe((data) => {
      console.log(data);
      this.toast.success('Patient Added')
      this.router.navigate(['home/addappointment'])

    }, (response) => {
      console.log(response)
    })

  }


}
