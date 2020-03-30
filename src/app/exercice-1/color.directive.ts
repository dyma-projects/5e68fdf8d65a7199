import { Directive, HostBinding, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appColor]"
})
export class ColorDirective {
  @HostBinding("style.color") color: string = "black";

  constructor(private el: ElementRef) {}

  @HostListener("window:keydown", ['$event']) keydown($event) {
    const key = $event.key;
    switch (key) {
      case "ArrowUp":
        this.color = "blue";
        break;
      case "ArrowDown":
        this.color = "yellow";
        break;
      case "ArrowRight":
        this.color = "green";
        break;
      case "ArrowLeft":
        this.color = "orange";
        break;
      default:
        this.color = "black";
    }
  }
}
