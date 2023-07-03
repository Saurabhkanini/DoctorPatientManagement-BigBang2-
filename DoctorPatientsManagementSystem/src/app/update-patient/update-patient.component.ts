import { Component, OnInit } from '@angular/core';
import { DoctorPatientService } from '../services/doctor-patient.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private service: DoctorPatientService, private toast: ToastrService, private router: Router) { }
  patientId: string | null = '';
  patient: any = {

  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.patientId = param.get('id')
      console.log(this.patientId)
    });
    if (this.patientId !== null)
      this.service.getPatient(parseInt(this.patientId)).subscribe((data) => {
        this.patient = data;
        console.log(this.patient)
      })

  }


  updatePatient() {
    console.log('addpatient', this.patient)
    if (this.patientId !== null)
      this.service.updatePatient(parseInt(this.patientId), this.patient).subscribe((data) => {
        this.toast.success('Patient Updated')
        console.log(data);
      })

  }


}
