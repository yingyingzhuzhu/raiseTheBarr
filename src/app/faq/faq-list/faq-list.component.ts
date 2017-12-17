import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Faq } from '../faq.model';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.css']
})
export class FaqListComponent implements OnInit {
  faqs: Faq[];
  constructor(private faqService: FaqService,
  				private router: Router,
          private route: ActivatedRoute) { }

  ngOnInit() {
  	this.faqs = this.faqService.getFaqs();
  }

}
