import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
    new Quote(1,'Mobile is the enabling centerpiece of digital convergence. Mobile is the glue for all other digital industries to use when approaching convergence, but mobile is also the digital gateway for the real world to join in this global metamorphosis of human behavior.', 'Brian Kefa', 'Quoted by  Daniel Bæk, Co-founder of Nodes', 0, 0, new Date(2019,8,20)),
    new Quote(2, 'I think the biggest change, and the one we’re already starting to see take shape, is that globally the majority of internet usage will be done via a mobile device and for most people the mobile web will be their primary – if not their only – way of experiencing the internet.', 'Peninah Njeri', 'Quoted by Tomi Ahonen, consultant and speaker', 0, 0, new Date(2019,7,31)),
    new Quote(3, 'Mobile is becoming not only the new digital hub, but also the bridge to the physical world. That’s why mobile will affect more than just your digital operations — it will transform your entire business.', 'Cynthia Odul', 'Quoted by  Daniel Bæk, Co-founder of NodesQuoted by Matt Haig Author of Mobile Marketing – “The Message Revolution', 0, 0, new Date(2019,6,20)),
    new Quote(4,'The future of mobile is the future of online. It is how people access online content now.', 'Robert Einsten', 'Quoted by Phil Nickinson, Editor of Android Central', 0, 0, new Date(2019,8,22)),
    new Quote(5, 'Our lives will be facilitated by a myriad of adaptive applications running on different devices, with different sensors, all of them collecting tidbits about everything we do, and feeding big digital brains that can adapt applications to our needs simply because they get to know us.', 'John K9', 'Quoted by Márcio Cyrillo, Executive Director at CI&T', 0, 0, new Date(2019,8,22)),
 
  ];

  
  firstNum :number
  lastNum :number
  count: number

  deleteQuote(isComplete, index){
    if (isComplete){
      let toDelete = confirm( `Are you sure you want to delete ${this.quotes[index].quote}?`)
      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.myDate =new Date(quote.myDate);
    this.quotes.push(quote)
    
  }

  addTotal(mine,index){
    if(mine){
      this.quotes[index].upvote +=1;
    }
  }

  adTotal(isDown,index){
    if(isDown){
      this.quotes[index].downvote +=1;
    }
  }

  loopVote(){
    this.firstNum = 0
    this.lastNum = 0

    for(this.count=0 ; this.count < this.quotes.length; this.count++) {
      this.lastNum = this.quotes[this.count].upvote;
      if(this.lastNum > this.firstNum){this.firstNum = this.lastNum}
    }
    return  this.firstNum
  }

  constructor() { }

  ngOnInit() {
  }

}
