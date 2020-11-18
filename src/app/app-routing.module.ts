import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ContractComponent } from './contract/contract.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
{path:'', redirectTo:'dashboard', pathMatch:'full'},
{path:'dashboard', component: DashboardComponent },
{path:'clientes', component: ClientComponent },
{path:'contratos', component: ContractComponent},
{path:'status', component: StatusComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
