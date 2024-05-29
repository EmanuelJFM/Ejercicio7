import { Component, Input, inject } from '@angular/core';
import { IPatient } from '../../interfaces/patient';
import { Router, RouterModule } from '@angular/router';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss'
})
export class PatientComponent {
  paciente!: IPatient | null;
  router = inject(Router)
  constructor(private patientService: PatientService) { }

  ngOnInit():void{
    this.setPatientInfor();
  }
  setPatientInfor():void{
    this.patientService.currentPatient.subscribe(paciente => this.paciente = paciente);
  }
  goToForm():void{
    this.router.navigateByUrl('')
  }
}
