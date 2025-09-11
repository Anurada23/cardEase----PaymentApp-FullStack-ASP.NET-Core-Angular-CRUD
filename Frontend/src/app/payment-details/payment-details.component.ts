import { Component, OnInit, ViewChild } from '@angular/core';
import { PaymentDetailService } from '../Shared/payment-detail.service';
import { PaymentDetail } from '../Shared/payment-detail.model';
import { PaymentDetailFormComponent } from './payment-detail-form/payment-detail-form.component';

@Component({
  selector: 'app-payment-details',
  standalone: false,
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css'
})
export class PaymentDetailsComponent implements OnInit {
  list: PaymentDetail[] = [];
 

  // Inside the parent component class
  @ViewChild(PaymentDetailFormComponent) paymentFormComponent!: PaymentDetailFormComponent;
  
  constructor(public dataService: PaymentDetailService) { }
  
    ngOnInit(): void {
      this.dataService.refreshList().subscribe({
        next: data => {
          //console.log(data)
          this.list = data as PaymentDetail[]
          
        },
        error: err => {
          console.log(err)
        }
      }
      )
  }

  populateForm(selectedRecord : PaymentDetail) {
    this.paymentFormComponent.setFormData(selectedRecord);
  }

  onDelete(selectedId : number) {
    this.dataService.deletePaymentDetail(selectedId).subscribe({
      next: res => {
        this.dataService.paymentDetailsList = res as PaymentDetail[];
        //this.paymentForm.reset();
        console.log("Delete Successful")
      },
      error: err => {
        console.error('Insert error:', err);
      }
    });
  }


}
