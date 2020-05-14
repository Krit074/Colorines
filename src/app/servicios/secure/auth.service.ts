import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthService{

  constructor(private router: Router) {
  }
}
