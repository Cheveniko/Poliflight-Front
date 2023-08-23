import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss']
})
export class PagoComponent implements OnInit{
  public payPalConfig?: IPayPalConfig;
  showSuccess: boolean;
  showError: boolean;
  public showPaypalButtons: boolean;

  pay() {
    this.showPaypalButtons = true;
  }
 
  back(){
    this.showPaypalButtons = false;
  }

  ngOnInit(): void {
    this.initConfig();
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
            value: '9.99',
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: '9.99'
              }
            }
          },
          items: [
            {
              name: 'Enterprise Subscription',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'USD',
                value: '9.99',
              },
            }
          ]
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      label: 'paypal',
      layout: 'vertical'
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
