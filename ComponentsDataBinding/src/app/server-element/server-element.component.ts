import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name;

  constructor() { 
    console.log("constructor is called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges is called");
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnInit is called");
  }

  ngDoCheck() {
    console.log("ngDoCheck is called");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit is called");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked is called");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit is called");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked is called");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy is called");
  }
}
