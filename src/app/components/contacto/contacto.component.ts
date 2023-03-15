import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ContactoService } from 'src/app/services/contacto.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit, OnDestroy {
  public formData!: FormGroup;
  private peticion!: Subscription;

  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
    this.formData = new FormGroup(
      {
        nombre: new FormControl('', [
          Validators.required
        ]),
        correo: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        consulta: new FormControl('', [
          Validators.required
        ])
      }
    )
  }

  tiempo(form: any) {
    if (form.valid) {
      let timerInterval: number;
      swal.fire({
        title: 'Tu consulta se esta enviando',
        html: 'Esta alerta se cerrara automaticamente',
        timer: 2000,
        timerProgressBar: true,
        willClose: () => {
          clearInterval(timerInterval);
        },
      })
        .then(result => {
          /* Read more about handling dismissals below */
          if (result.dismiss === swal.DismissReason.timer) {
          }
        });
    } else {
      let timerInterval: number;
      swal.fire({
        title: 'El formulario es inválido',
        html: 'Por favor, fijate que este todo correcto',
        timer: 2000,
        timerProgressBar: true,
        willClose: () => {
          clearInterval(timerInterval);
        },
      })
        .then(result => {
          /* Read more about handling dismissals below */
          if (result.dismiss === swal.DismissReason.timer) {
          }
        });
    }
  }

  enviarFormulario(): void {
    const { nombre, correo, consulta } = this.formData.value;
    this.peticion = this.contactoService.sendForm({ nombre: nombre, correo: correo, consulta: consulta }).subscribe({
      next: () => {
        if (nombre && correo && consulta) {
          swal.fire('Formulario', 'Tu consulta se envio correctamente', 'success');
          this.formData = new FormGroup(
            {
              nombre: new FormControl('', [
                Validators.required
              ]),
              correo: new FormControl('', [
                Validators.required,
                Validators.email
              ]),
              consulta: new FormControl('', [
                Validators.required
              ])
            }
          )
        } else {
          swal.fire('Formulario', 'Tu consulta no se ha enviado', 'warning');
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.peticion.unsubscribe();
  }
}
