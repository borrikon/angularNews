import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  

  @Input() item
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.item)
  }
}
