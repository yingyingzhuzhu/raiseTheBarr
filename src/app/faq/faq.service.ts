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
    new Faq('What is inclusion?',"The U.S. Office of Personnel Management defines inclusion as a culture that connects each employee to the organization; encourages collaboration, flexibility, and fairness; and leverages diversity throughout the organization so that all individuals are able to participate and contribute to their full potential."), 
    new Faq('What are some common ways that D&I can be derailed?','There are dozens of ways that even well-intentioned organizations can hinder a diverse organizational culture. Some are attributed to practices in human resources but other divisions and departments can create roadblocks as well. For example, decisions such as what to include in job descriptions and what interview questions to ask can reflect bias by hiring managers and interfere with hiring the best candidate. Utilizing only one or two recruitment sources can reduce the applicant pool over time. Failure to include cross cultural behavioral skills in annual performance evaluations can reflect an unwillingness to hold employees accountable for their ability to work cross culturally. And using staff in a bilingual capacity without testing their language proficiency demonstrates a lack of awareness of the critical function communication in our work.'), 
    new Faq('How can a diverse workforce be achieved?','Diversity and inclusion is an organizational development initiative. It requires a change management strategy. To be successful, the entire organization must be involved. It means pursing multiple and simultaneous efforts that include: 1) Transforming the way that employees are recruited, interviewed, hired, evaluated, and promoted. 2) Engaging communities to become the employer of choice. 3) Ensuring that diversity initiatives are aligned with organizational goals. 4) Creating safe spaces for employee. 5) Training managers and employees in how their actions impact diversity and inclusion efforts. 6) Celebrating success and much more.')
  ];


  getFaqs() {
    console.log(this.faqs);
    return this.faqs.slice();
  }

  getFaq(index: number) {
    return this.faqs[index];
  }
}
