import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class Swal2Service {
  constructor() {}

  alertaToast(title?: string, footer?: string, icon?: any, timerDefault?: any) {
    const toAst = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: timerDefault > 3000 ? 5000 : 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    toAst.fire({
      icon,
      title,
      footer
    });
  }

  objectToFormData(obj) {
    const formData = new FormData();

    // prevent to send empty fields
    Object.keys(obj).forEach((key) => {
      if (obj[key] !== '') {
        formData.append(key, obj[key]);
      }
    });

    return formData;
  }
}
