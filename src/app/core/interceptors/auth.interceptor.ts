import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
//import { AuthService } from './auth.service'; // فرض کنید که AuthService در این مسیر باشد

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // دریافت توکن از AuthService (مثال فرضی)
    const authToken = ';ioh;OWHv;oiuwvbbsajlkbcs;hcf';
    // this.authService.getAuthToken(); // این توکن باید از AuthService گرفته شود

    // اگر توکن موجود باشد، هدر Authorization را اضافه می‌کنیم
    if (authToken) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      return next.handle(authReq).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            // مدیریت خطای 401 Unauthorized (مثلاً هدایت به صفحه ورود)
            // this.authService.logout(); // فرض کنید که logout متدی برای خروج از سیستم است
            // به طور دلخواه می‌توانید کارهای دیگری هم انجام دهید، مانند هدایت کاربر به صفحه ورود
          }
          return throwError(error); // خطای غیر از 401 را مجدداً پرتاب می‌کنیم
        })
      );
    }

    // اگر توکن موجود نباشد، درخواست را بدون تغییر ارسال می‌کنیم
    return next.handle(req);
  }
}
