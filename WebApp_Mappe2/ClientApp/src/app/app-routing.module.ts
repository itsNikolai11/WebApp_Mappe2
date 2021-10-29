import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { LoginComponent } from './login/login.component';
import { ListeRute } from './rute/liste/listeRute';
import { AvgangComponent } from './avgang/avgangListe/avgang.component';
import { DestinasjonComponent } from './destinasjon/destinasjonListe/destinasjoner.component';
import { DestinasjonComponent } from './destinasjon/destinasjonListe/destinasjoner.component';
import { DestinasjonLagre } from './destinasjon/destinasjonLagre/destinasjonLagre';

const appRoots: Routes = [
  { path: 'adminpage', component: AdminpageComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'rute', component: ListeRute },
  { path: 'avgang', component: AvgangComponent },
  { path: 'destinasjonListe', component: DestinasjonComponent }

  { path: 'destinasjonListe', component: DestinasjonComponent },
  { path: 'destinasjonLagre', component: DestinasjonLagre }
  //Husk eks 'rediger/:id' send med f.eks id i rediger, slett kall.
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoots)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
