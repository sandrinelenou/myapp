import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';


  const routes: Routes = [
    { path: 'home', component: HomeComponent }, // Rotta per la pagina "home"
    
  // Rotta per gestire i file nell'asset
  { path: 'assets/file:///C:/Users/YOUSAN00/Documents/CV_Aubay_Sandrine.pdf', component: HomeComponent }
  ];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NgxExtendedPdfViewerModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
