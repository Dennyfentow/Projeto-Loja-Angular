import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[mouseEnderHover]'
})
export class MouseEnterHoverDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) { }

    @HostListener('mouseenter')
    mouseOn() {
        this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    }

    @HostListener('mouseleave')
    mouseOff() {
        this.renderer.setStyle(this.el.nativeElement, 'cursor', 'default');
    }
}