import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alert',
  imports: [FormsModule, CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {

  @Input() ShowModal: boolean = false
  // @Output() CloseModal = new EventEmitter<void>();

  closeModal() {
    // this.CloseModal.emit();
    window.location.reload();
  }

}
