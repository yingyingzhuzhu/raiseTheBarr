import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Faq } from '../faq.model';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-faq-detail',
  templateUrl: './faq-detail.component.html',
  styleUrls: ['./faq-detail.component.css']
})
export class FaqDetailComponent implements OnInit {
  faq: Faq;
  id: number;

  constructor(private faqService: FaqService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  	this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.faq = this.faqService.getFaq(this.id);
        }
      );
  }

}
