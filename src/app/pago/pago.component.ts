import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss']
})
export class PagoComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;
  showSuccess: boolean;
  showError: boolean;
  public showPaypalButtons: boolean;

  public subscriptionPrice: string = '9.99'; // Cambia el precio aquí


  dataToSend = {
    correo: 'davpasquel@gmail.com',
    nombre: 'David Mena',
  };

  constructor(private http: HttpClient) {}

  pay() {
    this.showPaypalButtons = true;
  }

  back() {
    this.showPaypalButtons = false;
  }

  ngOnInit(): void {
    this.initConfig();
    
  }

  finalizar(){
    this.http.post('http://localhost:5000/send_email', this.dataToSend)
      .subscribe(response => {
        console.log('Respuesta del servidor:', response);
      });
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId: 'AYfU82BZXXaVv95vSW87p5wF45RWZIqDAqnaTpebkw91wd6s5lCZTJa0uikOXZhuSQwH4iITxhRzC0bX',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: this.subscriptionPrice, // Usar la variable aquí
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: this.subscriptionPrice, // Usar la variable aquí
                },
              },
            },
            items: [
              {
                name: 'Servicio de gestion de boletos PoliFinghts',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'USD',
                  value: this.subscriptionPrice, // Usar la variable aquí
                },
              },
            ],
          },
        ],
      },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then((details: any) => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        this.showSuccess = true;
        this.showPaypalButtons = false;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
        this.showSuccess = false;
      },
      onError: err => {
        console.log('OnError', err);
        this.showError = true;
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }
}
