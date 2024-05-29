import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { InformationPatientService } from '../../services/information-patient.service';
import { IPatient } from '../../interfaces/patient';
import { Router, RouterModule } from '@angular/router';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-form',
  standalone: true,
  providers: [InformationPatientService],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  consultaForm!: FormGroup;
  pacientes: IPatient[] = [];
  nombreNoExiste = false;
  router = inject(Router)
  constructor(private informationPatient: InformationPatientService, private patientservice:PatientService) {
    this.consultaForm = new FormGroup({
      paciente: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.getCitasAsArray();
  }

  getCitasAsArray(): void {
    this.informationPatient.getCitasAsArray().then((citas: IPatient[]) => {
      this.pacientes = citas;
    });
  }

  goToPatientInfo():void{
    this.router.navigateByUrl('/paciente');
  }
  consultar() {
    const nombrePaciente = this.consultaForm.get('paciente')?.value;
    const pacienteFiltrado = this.pacientes.filter(paciente => paciente.name === nombrePaciente);
    if (pacienteFiltrado.length === 0) {
      this.nombreNoExiste = true;
      return;
    }
    this.patientservice.changePatient(pacienteFiltrado[0]);
    this.goToPatientInfo();
  }
}
