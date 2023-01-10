import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector:'[appDropdown]'
})
export class DropdownDirective {
  // 클릭할때마다 첨부하거나 두번쩨 클릭시 제거하는 디렉티브 만들기
  
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event:Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }  // document에 리스너를 배치함으로써 아무곳이나 클릭해 드롭다운이 닫히도록 설정하기

  constructor( private elRef: ElementRef){

  }
}