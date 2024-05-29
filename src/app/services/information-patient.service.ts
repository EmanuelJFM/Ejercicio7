import { Injectable } from '@angular/core';
import { IPatient } from '../interfaces/patient';
import { collection, getDocs } from '@angular/fire/firestore';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class InformationPatientService {

  constructor(private firestore: Firestore) { }
  getCitas() {
    return getDocs(collection(this.firestore, 'citas')).then(x => x.docs);
  }

  getCitasAsArray() {
    return this.getCitas().then(docCita => {
      const citasArray: IPatient[] = [];
      docCita.forEach(doc => {
        const data = doc.data() as IPatient;
        citasArray.push(data);
      });
      return citasArray;
    });
  }

}
