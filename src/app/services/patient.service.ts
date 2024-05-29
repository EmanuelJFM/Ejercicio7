import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPatient } from '../interfaces/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patientSource = new BehaviorSubject<IPatient | null>(null);
  currentPatient = this.patientSource.asObservable();

  constructor() { }

  changePatient(patient: IPatient) {
    this.patientSource.next(patient);
  }
}
