import { EventEmitter, Injectable } from '@angular/core';

import { Faq } from './faq.model';

@Injectable()
export class FaqService {
  faqSelected = new EventEmitter<Faq>();

  private faqs: Faq[] = [
    new Faq('What type of AI technique is being used for Raise the Barr?','Currently, Diversity and Inclusion trainings are out of date and uninspiring for employees. We are using Artificial Intelligence (AI) to make diversity training more interactive, while collecting data and focusing on the user’s concerns. To do this, we are creating a chatbot using natural language processing algorithms. This interactivity will increase the interest and attention of users, as well as provide data to improve the training content. On top of improving training content, the chatbot will learn to answer any questions a user might ask. At the end of the training, the employees will take a feedback quiz based on what they learned, providing the program information about what was truly helpful and what could be improved. Our program will additionally be inclusive to employees with visual disabilities, by using text to speech software, allowing them to engage in the same way as their visually abled coworkers.'),
    new Faq('How does the chatbot work?','TBD'),
    new Faq('What kind of questions can I ask to the chatbot?','Anything you would like that pertains to diversity, inclusion, and workplace.'),
    new Faq('What is the name of the chatbot?','Her name is Raina.'),
    new Faq('What is diversity?','The Society of Human Resource Management (SHRM) defines diversity in the employment context as the collective mixture of differences and similarities which includes individual and organizational characteristics, values, beliefs, experiences, backgrounds, preferences and behaviors.'),
    new Faq('What is inclusion?',"The U.S. Office of Personnel Management defines inclusion as a culture that connects each employee to the organization; encourages collaboration, flexibility, and fairness; and leverages diversity throughout the organization so that all individuals are able to participate and contribute to their full potential.")
  ];


  getFaqs() {
    console.log(this.faqs);
    return this.faqs.slice();
  }

  getFaq(index: number) {
    return this.faqs[index];
  }
}
