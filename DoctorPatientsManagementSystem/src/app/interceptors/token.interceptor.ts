import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoctorPatientService } from '../services/doctor-patient.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private service: DoctorPatientService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const mytoken = this.service.getToken();
    if (mytoken) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${mytoken}` }
      })
    }
    return next.handle(request);
  }
}
