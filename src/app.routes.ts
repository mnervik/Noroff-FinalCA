import {Routes, RouterModule} from '@angular/router';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {CardPageComponent} from "./pages/card-page/card-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'dashboard', component: DashboardPageComponent},
  {path: 'card', component: CardPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'contact', component: ContactPageComponent}
];

export const routing = RouterModule.forRoot(routes);
