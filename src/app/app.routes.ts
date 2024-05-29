import { Routes } from '@angular/router';
import { FormComponent } from './view/form/form.component';
import { PatientComponent } from './view/patient/patient.component';
import { authPatientGuard } from './auth/auth.patient.guard';

export const routes: Routes = [
    {
        path: '',
        component: FormComponent
    },
    {
        path: 'paciente',
        component: PatientComponent,
        canActivate: [authPatientGuard]
    },
];
