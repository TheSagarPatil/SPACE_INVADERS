import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Player } from './_classes/player.class';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.scss']
})
export class MainGameComponent implements OnInit {
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement> | any = document.querySelector('canvas');
  public context: CanvasRenderingContext2D | null = {} as CanvasRenderingContext2D;
  player : Player | undefined = undefined;
  constructor() { }
  
  ngOnInit(): void {
  }
  ngAfterViewInit(): void { 
    this.canvas  = document.querySelector('canvas');
    this.context = this.canvas?.getContext('2d');
    this.initialize();
    this.animate();
  }

  initialize( ) : void { 
    //this.context = this.canvas?.getContext( '2d' );
    //console.log( this.c )

    this.canvas.width = innerWidth;
    this.canvas.height = innerHeight;
    
    this.player = new Player ( this.context, this.canvas );
  }


  animate() : void {
    if( this.context ){
      this.context.fillStyle = 'black';
      this.context.fillRect(0,0,this.canvas.width, this.canvas.height)//.bind(this);
    }
    this.player?.draw();    
    requestAnimationFrame( this.animate.bind( this ) );
  }
  act(){
    console.log('act invoked');
  }
  @HostListener( 'window:keydown',['$event'] )
  onKeyRight(x : Event | any) { // appending the updated value to the variable
    console.log( x.key );

    const switcher = {
      'ArrowDown' : this.act,
      'ArrowUp' : this.act,
      'ArrowLeft' : this.act,
      'ArrowRight' : this.act,
      
      's': this.act,
      'S': this.act,
      
      'w': this.act,
      'W': this.act,
      
      'a': this.act,
      'A': this.act,

      'd': this.act,
      'D': this.act,
    }
    const key : string = x.key;
    //@ts-ignore
    const fn = switcher[key];
    if( fn ) {
      fn();
    }
  } 
}
