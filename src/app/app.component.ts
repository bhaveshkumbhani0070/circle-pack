import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ElementRef, Injectable, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { CirclePackComponent } from './circle-pack/circle-pack.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'circle-pack';
  @ViewChild('iframe') iframe: ElementRef;

  doc: any;
  compRef: any;

  constructor(
    private vcRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver) {}
 
  onLoad() {
    this.doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;

    const compFactory = this.resolver.resolveComponentFactory(CirclePackComponent);
    this.compRef = this.vcRef.createComponent(compFactory);
    this.doc.body.appendChild(this.compRef.location.nativeElement);
  }
  
}
