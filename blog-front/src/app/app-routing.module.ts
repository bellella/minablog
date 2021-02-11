import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogLayoutComponent } from './layout/blog-layout/blog-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthGuardService } from './service/other/auth-guard.service';

const routes: Routes = [
  {
    path: 'post',
    component: BlogLayoutComponent,
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/post/post.module').then(m => m.PostModule)
  },
  {
    path: 'admin',
     component: AdminLayoutComponent,
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
  },
  { path: '', redirectTo: 'post', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }
