import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { InicioComponent } from './inicio/inicio.component';
@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    FooterComponent,
    AboutComponent,
    NavbarComponent,
    ProyectosComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'about', component: AboutComponent},
      {path: 'skills', component: SkillsComponent},
      {path: 'footer', component: FooterComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

