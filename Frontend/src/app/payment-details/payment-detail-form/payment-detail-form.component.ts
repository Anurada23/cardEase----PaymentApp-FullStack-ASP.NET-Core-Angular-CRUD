import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { PaymentDetailService } from '../../Shared/payment-detail.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentDetail } from '../../Shared/payment-detail.model';

@Component({
  selector: 'app-payment-detail-form',
  standalone: false,
  templateUrl: './payment-detail-form.component.html',
  styleUrl: './payment-detail-form.component.css'
})
export class PaymentDetailFormComponent implements OnInit{

  paymentForm!: FormGroup;
  


  constructor(private service: PaymentDetailService, private fb: FormBuilder) { }

    ngOnInit(): void {
      this.paymentForm = this.fb.group({
        paymentDetailsId: [0],
        cardOwnersName: ['', Validators.required],
        cardNumber: ['', [Validators.required, Validators.minLength(16)]],
        expirationDate: ['', Validators.required],
        securityCode: ['', [Validators.required, Validators.minLength(3)]],
      });
  }

  onSubmit(): void {
    const formData = this.paymentForm.value;

    if (formData.paymentDetailsId === 0) {
      // Insert new record
      this.service.postPaymentDetail(formData).subscribe({
        next: res => {
          this.service.paymentDetailsList = res as PaymentDetail[];
          this.paymentForm.reset();
          console.log("Insert Successful")
        },
        error: err => {
          console.error('Insert error:', err);
        }
      });
    } else {
      // Update existing record
      this.service.putPaymentDetail(formData.paymentDetailsId, formData).subscribe({
        next: res => {
          this.service.paymentDetailsList = res as PaymentDetail[];
          this.paymentForm.reset();
          console.log("Update Successful")
        },
        error: err => {
          console.error('Update error:', err);
        }
      });
    }
  }

  setFormData(record: PaymentDetail) {
    this.paymentForm.patchValue({
      paymentDetailsId: record.paymentDetailsId,
      cardOwnersName: record.cardOwnersName,
      cardNumber: record.cardNumber,
      expirationDate: record.expirationDate,
      securityCode: record.securityCode,
    });
  }



}
