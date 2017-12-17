import { Component, OnInit } from '@angular/core';

import { Faq } from './faq.model';
import { FaqService } from './faq.service';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  providers: [FaqService]
})
export class FaqComponent implements OnInit {
  selectedFaq: Faq;
  constructor(private faqService: FaqService) { }

  ngOnInit() {
  	this.faqService.faqSelected
      .subscribe(
        (faq: Faq) => {
          this.selectedFaq = faq;
        }
      );
  }

}
