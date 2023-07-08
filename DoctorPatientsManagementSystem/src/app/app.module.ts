import { NgModule } from '@angular/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { DoctorManagementComponent } from './doctor-management/doctor-management.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActiveDoctorComponent } from './active-doctor/active-doctor.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PatientManagementComponent } from './patient-management/patient-management.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { AddappointmentComponent } from './addappointment/addappointment.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { DocProfileComponent } from './doc-profile/doc-profile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ViewDoctorComponent,
    AddDoctorComponent,
    DoctorManagementComponent,
    UpdateDoctorComponent,
    ContactUsComponent,
    ActiveDoctorComponent,
    AboutusComponent,
    PatientManagementComponent,
    AddPatientComponent,
    AppointmentComponent,
    AddpatientComponent,
    AddappointmentComponent,
    UpdatePatientComponent,
    DocProfileComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    IvyCarouselModule

  ],
  providers: [
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
