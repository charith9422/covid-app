import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  constructor(private toastr: ToastrService) {}
  showSuccess(messageLower?: string, messageUpper?: string) {
    this.toastr.success(messageLower, messageUpper);
  }
  showWarning(messageLower?: string, messageUpper?: string) {
    this.toastr.warning(messageLower, messageUpper);
  }
  showError(messageLower?: string, messageUpper?: string) {
    this.toastr.error(messageLower, messageUpper);
  }
}
