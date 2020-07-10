import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './pages/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';


const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {
    path:'dashboard', 
    component:DashboardComponent,
    children: [
      {path:'', component:DefaultComponent},
      {path:'settings', component:SettingsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
