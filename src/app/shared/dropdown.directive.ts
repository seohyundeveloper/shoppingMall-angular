import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector:'[appDropdown]'
})
export class DropdownDirective {
  // 클릭할때마다 첨부하거나 두번쩨 클릭시 제거하는 디렉티브 만들기
  
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}