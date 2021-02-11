import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { ComponentModule } from 'src/app/components/component.module';
import { FormsModule } from '@angular/forms';
import { PostViewComponent } from './post-view/post-view.component';
import { UiModule } from 'src/app/shared/ui.module';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { PostCatListComponent } from './post-cat-list/post-cat-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {} },
  { path: 'view/:id', component: PostViewComponent, data: {} },
  { path: 'list/:type/:value', component: PostListComponent, data: {} },
  { path: 'cat/list/:categoryId', component: PostCatListComponent, data: {} },
  { path: 'profile', component: ProfileComponent, data: {} },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    PostListComponent,
    PostCatListComponent,
    PostViewComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    UiModule,
    ComponentModule,
  ]
})
export class PostModule { }
