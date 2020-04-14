import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../../../core/service/common.service';
import { AuthService } from '../../../core/service/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../../common/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, OnDestroy {

  /**
   *  当前用户
   */
  currentUser: User;

  private subscription: Subscription;

  constructor(private router: Router,
              private authService: AuthService,
              private commonService: CommonService) {
  }

  ngOnInit() {
    this.init();
  }

  init() {
   // this.commonService.appOnReady(() => {
      // this.currentUser = this.authService.getCurrentUser();
   // });
  }

  logout() {
    console.log('logout');
    // this.authService.logout()
    //   .subscribe(() => {
    //   }, () => {
    //   }, () => {
    //     this.router.navigateByUrl('/admin/auth');
    //     console.log(1);
    //   });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
