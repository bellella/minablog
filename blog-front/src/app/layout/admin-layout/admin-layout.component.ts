import {Component, ViewEncapsulation} from '@angular/core';
import { INavData } from '@coreui/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss','../../../assets/css/coreui.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminLayoutComponent {
  public sidebarMinimized = false;
  public navItems: INavData[] = [
    // {
    //   name: 'Dashboard',
    //   url: '/admin/dashboard',
    //   icon: 'icon-pencil',
    //   badge: {
    //     variant: 'info',
    //     text: 'NEW'
    //   }
    // },
    {
      title: true,
      name: 'Setting'
    },
    {
      name: 'UI',
      url: '/admin/setting/ui',
      icon: 'icon-star'
    },
    {
      name: 'Home',
      url: '/admin/setting/home',
      icon: 'icon-home'
    },
    {
      title: true,
      name: 'Post'
    },
    {
      name: 'Category',
      url: '/admin/category',
      icon: 'icon-list'
    },
    {
      name: 'Posts',
      url: '/admin/posts',
      icon: 'icon-pencil'
    }
  ];
  

  constructor(){

  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
