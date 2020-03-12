import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {HomepageComponent} from "./homepage/homepage.component";
import { ProjectsComponent } from "./projects/projects.component";
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'resume', component: ResumeComponent},
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
    // path: 'heroes',
    // component: HeroListComponent,
    // data: { title: 'Heroes List' }
  // },
  // { path: '',
    // redirectTo: '/heroes',
    // pathMatch: 'full'
  // },
  // { path: '**', component: NavBarComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent, AboutComponent, ProjectsComponent, ResumeComponent]
