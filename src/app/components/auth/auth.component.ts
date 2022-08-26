import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AuthLoginType } from 'src/models/auth-login';
import { AuthRegisterType } from 'src/models/auth-register';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {

  @ViewChild(LoginComponent) login!: LoginComponent
  @ViewChild(RegisterComponent) register!: RegisterComponent

  modalForm!: HTMLElement | null
  modalClose!: HTMLElement | HTMLButtonElement | null

  public subs: Subscription[] = []

  get isLoggedIn(): boolean {
    return false
  }

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.modalClose = document.getElementById('modalClose')
    this.modalForm = document.getElementById('authModal');
    this.modalForm?.addEventListener('hide.bs.modal', () => {
      this.login.resetForm()
      this.register.resetForm()
    })
  }

  public userLogin(data: AuthLoginType) {
    const sub: Subscription = this.auth.login(data).subscribe({
      next: () => {
        this.modalClose?.click()
        this.router.navigateByUrl('dashboard')
      },
      error: (err: any) => {
        console.error('ERROR: ', err)
      }
    })
    this.subs.push(sub)
  }

  public userRegister(data: AuthRegisterType) {
    const sub: Subscription = this.auth.register(data).subscribe({
      next: () => {
        this.modalClose?.click()
        this.router.navigateByUrl('dashboard')
      },
      error: (err: any) => {
        console.error('ERROR: ', err)
      }
    })
    this.subs.push(sub)
  }

  public ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe())
  }
}
