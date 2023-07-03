import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { DoctorManagementComponent } from './doctor-management/doctor-management.component';
import { AuthGuard } from './authGuard/auth.guard';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { ActiveDoctorComponent } from './active-doctor/active-doctor.component';
import { PatientManagementComponent } from './patient-management/patient-management.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AddappointmentComponent } from './addappointment/addappointment.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home/signup', component: SignupComponent },
  { path: 'home/login', component: LoginComponent },
  { path: 'home/doctorman', component: DoctorManagementComponent, canActivate: [AuthGuard] },
  { path: 'home/viewdoctor/:id', component: ViewDoctorComponent },
  { path: 'home/adddoctor', component: AddDoctorComponent },
  { path: 'home/updatedoctor/:id', component: UpdateDoctorComponent },
  { path: 'home/viewactivedoctor', component: ActiveDoctorComponent, canActivate: [AuthGuard] },
  { path: 'home/patientman', component: PatientManagementComponent, canActivate: [AuthGuard] },
  { path: 'home/addpatient', component: AddPatientComponent, canActivate: [AuthGuard] },
  { path: 'home/appointment', component: AppointmentComponent, canActivate: [AuthGuard] },
  { path: 'home/addappointment', component: AddappointmentComponent, canActivate: [AuthGuard] },
  { path: 'home/updatepatient/:id', component: UpdatePatientComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
