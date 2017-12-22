import { Component ViewChild } from '@angular/core';

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
