import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponent } from './docs.component';
import { IntoComponent } from './into/into.component';
import { ReqComponent } from './req/req.component';


@NgModule({
  declarations: [
    DocsComponent,
    IntoComponent,
    ReqComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DocsModule { }
