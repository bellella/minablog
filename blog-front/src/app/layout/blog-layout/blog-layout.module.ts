import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BlogLayoutComponent } from './blog-layout.component';
import { UiModule } from 'src/app/shared/ui.module';
import { ContentComponent } from './content/content.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CommonModule } from '@angular/common';
import { ComponentModule } from 'src/app/components/component.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    UiModule,
    ComponentModule
  ],
  declarations: [
    ContentComponent,
    SideBarComponent,
    FooterComponent,
    NavBarComponent,
    BlogLayoutComponent
  ],
  exports: [
    BlogLayoutComponent
  ]
})

export class BlogLayoutModule {}
