import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp } from '@angular/fire/app'
import { routes } from './app.routes';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideFirebaseApp(() => initializeApp ({
        apiKey: "AIzaSyCB9TZzKYmyFwTRrM9UWlbMv4gsIADwtHQ",
        authDomain: "peliculas-b3556.firebaseapp.com",
        projectId: "peliculas-b3556",
        storageBucket: "peliculas-b3556.appspot.com",
        messagingSenderId: "442266667673",
        appId: "1:442266667673:web:e8060bd9412bc68dc58608",
        measurementId: "G-6N1TNTYQBC"
      })),
      provideFirestore((() => getFirestore())),
      {
        provide: FIREBASE_OPTIONS,
        useValue: {
          apiKey: "AIzaSyDYhDIwBhQRW4z7SHApCyArHvab-BRG6Kk",
          authDomain: "pagina-noticias-e72ca.firebaseapp.com",
          projectId: "pagina-noticias-e72ca",
          storageBucket: "pagina-noticias-e72ca.appspot.com",
          messagingSenderId: "30010539765",
          appId: "1:30010539765:web:6c8cd3672f450a4cba8fbc"
        }
      }
  ]
};
