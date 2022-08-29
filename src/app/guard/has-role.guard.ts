import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class HasRoleGuard implements CanActivate, CanActivateChild {
  constructor(private auth: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isAuthorized: boolean = this.auth.user.role.includes(
      route.data['role']
    );
    if (!isAuthorized) {
      window.alert(
        `You are not authorized to access this page as: ${route.data['role']}`
      );
    }
    return isAuthorized;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isAuthorized: boolean = this.auth.user.role.includes(
      childRoute.data['role']
    );
    if (!isAuthorized) {
      window.alert(
        `You are not authorized to access this page as: ${childRoute.data['role']}`
      );
    }
    return isAuthorized;
  }
}
