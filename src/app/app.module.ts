import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeComponent } from './components/me-component/me.component';
import { CoursesComponent } from './components/courses-component/courses.component';
import { SkillsComponent } from './components/skills-component/skills.component';
import { ExperienceComponent } from './components/experience-component/experience.component';
import { EducationComponent } from './components/education-component/education.component';

@NgModule({
  declarations: [
    AppComponent,
    MeComponent,
    CoursesComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
