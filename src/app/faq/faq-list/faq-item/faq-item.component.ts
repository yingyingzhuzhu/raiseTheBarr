import { Component, OnInit, Input } from '@angular/core';
import { Faq } from '../../faq.model';

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.css']
})
export class FaqItemComponent implements OnInit {
  @Input() faq: Faq;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
