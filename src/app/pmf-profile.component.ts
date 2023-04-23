import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "pmf-profile",
    template: "<h1>{{emoji}} {{name}} </h1> <button (click)='count()'>+</button>",
    styles: ['h1 { color: red }']
})
export class ProfileComponent {
    @Input()
    name = "pmf"
    @Input()
    emoji = "⭐"




    @Output()
    counter = new EventEmitter<number>();

    count(): void {
        this.counter.emit(5);
        console.log("click count")
    }

}