import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DoctorPatientService } from '../services/doctor-patient.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service: DoctorPatientService, private toast: ToastrService) { }

  errorMsg: string = '';
  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-z]*')]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]),
    phoneNo: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
    gender: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required])
  })
  get userName() {
    return this.loginForm.get('userName');

  }
  get password() {
    return this.loginForm.get('password');
  }
  get confirmPassword() {
    return this.loginForm.get('confirmPassword');
  }
  get email() {
    return this.loginForm.get('email');
  }
  get phoneNo() {
    return this.loginForm.get('phoneNo');
  }
  get gender() {
    return this.loginForm.get('gender')
  }
  get role() {
    return this.loginForm.get('role')
  }
  ngOnInit(): void {
  }
  SignUp() {
    let regUser: any = {
      userName: this.userName?.value,
      password: this.password?.value,
      confirmPassword: this.confirmPassword?.value,
      email: this.email?.value,
      phoneNo: this.phoneNo?.value,
      gender: this.gender?.value,
      role: this.role?.value
    }

    console.log(this.loginForm.value)
    console.log(this.userName?.value)
    console.log(regUser)
    this.service.registerUser(regUser).subscribe((data) => {
      console.log(data);
      if (data !== null) {
        this.toast.success('Registered Successfully')
      }

    }, (response) => {
      this.toast.error('Failed')
      this.errorMsg = response.error;
    });

  }
}
