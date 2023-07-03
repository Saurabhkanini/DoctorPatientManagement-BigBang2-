import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorPatientService } from '../services/doctor-patient.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private service: DoctorPatientService, private toast: ToastrService) { }
  doctorId: string | null = '';
  public doctor: any = {};
  addDoctor: any = {
    doctorName: '',
    age: 0,
    location: '',
    specialization: '',
    imageData: ''
  }
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
  onFileSelected(event: any) {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const fileData = fileReader.result as ArrayBuffer;
      const byteArray = new Uint8Array(fileData);
      const numbersArray = Array.from(byteArray);
      const base64String = btoa(String.fromCharCode.apply(null, numbersArray));
      this.doctor.imageData = base64String;
      console.log(this.doctor)
    }
    fileReader.readAsArrayBuffer(file);
  }
  UpdateDoctor() {

    if (this.doctorId !== null)
      this.service.updateDoctor(parseInt(this.doctorId), this.doctor).subscribe((data) => {
        this.toast.success('Doctor Updated')
        console.log(data);
      })

  }


}
