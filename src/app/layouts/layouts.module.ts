import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutsComponent } from './layouts.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    BreadCrumbsComponent,
    SidebarComponent,
    LayoutsComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule
  ]
})
export class LayoutsModule { }
