import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginComponent } from './components/login/login.component';
import { LogsComponent } from './components/logs/logs.component';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TrendsComponent } from './components/trends/trends.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginAuthGuard } from './guards/login-auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent,canActivate:[LoginAuthGuard]},
  {path:'',redirectTo:"/login",pathMatch:'full'},
  {path:'opportunities', component : OpportunitiesComponent,canActivate:[AuthGuard]},
  {path:'trends' , component:TrendsComponent,canActivate:[AuthGuard]},
  {path:'logs' , component:LogsComponent,canActivate:[AuthGuard]},
  {path: '**' , component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),MDBBootstrapModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
