import { NgModule } from "@angular/core";

import { MouseEnterHoverDirective } from "./mouse-enter-hover.directive";

@NgModule({
    declarations: [MouseEnterHoverDirective],
    exports: [MouseEnterHoverDirective]
})
export class MouseEnterHoverModule { }