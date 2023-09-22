import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './element/todo/todo.component';
import { AboutComponent } from './element/about/about.component';
import { DocsComponent } from './docs/docs.component';
import { authguardGuard } from "./authguard.guard"
import { LoginComponent } from './element/login/login.component';

const routes: Routes = [
  { path: 'apps', component: TodoComponent, canActivate:[authguardGuard] },
  { path: 'about', component: AboutComponent },
  { path: '', component: LoginComponent },
  { path: 'docs', component: DocsComponent, canActivate:[authguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
