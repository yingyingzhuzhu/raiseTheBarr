import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent {
	@ViewChild('f') demoForm: NgForm;
	submitted = false;
	onSubmit() {
		this.submitted = true;
		console.log(this.demoForm);
		this.demoForm.reset();
	}
}
