import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { TrabajaConNosotrosComponent } from './pages/trabaja-con-nosotros/trabaja-con-nosotros.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactanosComponent,
    TrabajaConNosotrosComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
