// vjs-player.component.ts
import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-vjs-player',
  template: `
  <div class="view-item--label">
        {{ label }}
      </div>
  
      <video #target class="video-js" controls playsinline preload="none"></video>

  `,
  styleUrls: [
    './vjs-player.component.css'
  ],
  encapsulation: ViewEncapsulation.None,
})
export class VjsPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('target', {static: true}) target: ElementRef;
  // see options: https://github.com/videojs/video.js/blob/maintutorial-options.html
  @Input()
  label: any;

  @Input() 
  options: {
      fluid: boolean,
      aspectRatio: string,
      autoplay: boolean,
      sources: {
          src: string,
          type: string,
      }[],
  };
  player: videojs.Player;

  
  @Input()
  value: any;

  get isEmpty() {
    return !this.valueAsArray.length;
  }

  get valueAsArray() {
    const value = this.value;

    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  }

  constructor(
    private elementRef: ElementRef,
  ) { }

  ngOnInit() {
    // instantiate Video.js
    this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
    });
  }

  ngOnDestroy() {
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }
  
}