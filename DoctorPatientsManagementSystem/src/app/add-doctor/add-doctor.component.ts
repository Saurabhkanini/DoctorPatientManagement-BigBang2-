import { Component } from '@angular/core';
import { DoctorPatientService } from '../services/doctor-patient.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {

  constructor(private service: DoctorPatientService, private toast: ToastrService) { }
  addDoctor: any = {
    doctorName: '',
    specialization: '',
    doctorStatus: false,
    age: 0,
    location: '',
    imageData: ''
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const fileData = fileReader.result as ArrayBuffer;
      const byteArray = new Uint8Array(fileData);
      const numbersArray = Array.from(byteArray);
      const base64String = btoa(String.fromCharCode.apply(null, numbersArray));
      this.addDoctor.ImageData = base64String;
      console.log(this.addDoctor)
    }
    fileReader.readAsArrayBuffer(file);
  }
  AddDoctor() {
    this.service.addDoctor(this.addDoctor).subscribe((data) => {
      console.log(data);
      this.toast.success('Doctor Added')
    }, (response) => {
      console.log(response)
    })

  }

}
