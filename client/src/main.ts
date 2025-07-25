import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter } from '@angular/router';

import { LoginPage } from './app/login-page/login-page';
import { AuthLayout } from './app/shared/layouts/auth-layout/auth-layout';
import { SiteLayout } from './app/shared/layouts/site-layout/site-layout';
import { RegisterPage } from './app/register-page/register-page';

bootstrapApplication(App, {
  providers: [
    provideRouter([
      {
        path: '',
        component: AuthLayout,
        children: [
          { path: 'login', component: LoginPage },
          { path: 'register', component: RegisterPage},
          { path: '', redirectTo: '/login', pathMatch: 'full' }
        ]
      },
      {
        path: '',
        component: SiteLayout,
        children: [
          // Добавь сюда внутренние маршруты позже, например:
          // { path: 'dashboard', component: DashboardPage }
        ]
      }
    ])
  ]
}).catch(err => console.error(err));
