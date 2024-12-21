import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { TrabajaConNosotrosComponent } from './pages/trabaja-con-nosotros/trabaja-con-nosotros.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: 'trabaja-con-nosotros', component: TrabajaConNosotrosComponent },
  { path: '', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
