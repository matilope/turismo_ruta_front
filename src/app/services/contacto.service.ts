import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formulario } from '../interfaces/formulario';

@Injectable({
  providedIn: 'root'
})

export class ContactoService {

  constructor(private _http: HttpClient) { }

  sendForm(body: Formulario): Observable<Formulario> {
    return this._http.post<Formulario>('https://turismo-ruta-back.vercel.app/api/formulario', body);
  }
}
