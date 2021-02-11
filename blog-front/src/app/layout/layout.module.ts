import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BlogLayoutModule } from './blog-layout/blog-layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';
import { AdminLayoutModule } from './admin-layout/admin-layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BlogLayoutModule,
    RouterModule,
    AdminLayoutModule
    // BrowserModule,
    // BrowserAnimationsModule,
    // AppAsideModule,
    // AppBreadcrumbModule.forRoot(),
    // AppFooterModule,
    // AppHeaderModule,
    // AppSidebarModule,
    // PerfectScrollbarModule
  ],
  declarations: [
  ],
  exports: [
    BlogLayoutModule,
    AdminLayoutModule
  ]
})

export class LayoutModule {}
