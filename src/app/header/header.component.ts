import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector:'app-header',
  templateUrl:'./header.component.html'
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  constructor(){

  }

  ngOnInit(): void {
      
  }

  onSelect(feature:string) {
   // console.log(feature)
    this.featureSelected.emit(feature);
  }
}