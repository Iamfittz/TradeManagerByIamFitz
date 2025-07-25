import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { LoginPage } from './app/login-page/login-page';



bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: 'login', component: LoginPage }
    ])
  ]
}).catch(err => console.error(err));
