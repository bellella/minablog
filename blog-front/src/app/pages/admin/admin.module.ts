import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentModule } from 'src/app/components/component.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { UiModule } from 'src/app/shared/ui.module';
import { SettingComponent } from './setting/setting.component';
import { HomeSettingComponent } from './setting/home/home.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: {} },

      // {
      //   path: 'dashboard',
      //   component: DashboardComponent
      // },
      {
        path: 'setting/ui',
        component: SettingComponent,
        data: { title: 'setting/ui' }
      },
      {
        path: 'setting/home',
        component: HomeSettingComponent,
        data: { title: 'setting/home' }
      },
      {
        path: 'category',
        component: CategoryComponent,
        data: { title: 'category' }
      },
      {
        path: 'posts',
        component: PostsComponent,
        data: { title: 'posts' }
      }
];

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    CategoryComponent,
    SettingComponent,
    HomeSettingComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ComponentModule,
    UiModule

  ]
})
export class AdminModule { }
