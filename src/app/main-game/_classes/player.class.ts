import { ElementRef } from "@angular/core";
import { IPosition } from "../_interfaces/player-position.interface";
import { IVelocity } from "../_interfaces/velocity.interface";

export class Player{ 
  position : IPosition;
  velocity : IVelocity;
  image : string;
  width : number;
  height: number;

  constructor( 
    public canvasContext : CanvasRenderingContext2D | null,
    public canvas : ElementRef<HTMLCanvasElement>  | any, 
    ){ 
    this.position = {
      x : 200,
      y : 200,
    };
    this.velocity = {
      x : 0,
      y : 0,
    };
    this.image = '';
    this.width = 100;
    this.height = 100;
    this.image = './../../../assets/images/spaceship.png';
  }

  draw() : void {
    if( this.canvasContext ){
      this.canvasContext.fillStyle = 'black';
      //this.canvasContext.fillRect( this.position.x, this.position.y, this.width, this.height, );
      const _image = this.getPlayerImage();
      //this.canvasContext.drawImage( _image, this.position.x, this.position.y, _image.width, _image.height );
      const x = (this.canvas.width  / 2) - (_image.width  / 2) ;
      const y =  this.canvas.height  - _image.height - 100 ;
      this.canvasContext.drawImage( _image, x, y, _image.width, _image.height );

    }else{
      throw new Error( 'Canvas can not be null' );
    }
  }

  getPlayerImage() : any | typeof Image {
    const image = new Image( );
    const scale = 0.15;

    image.src = this.image;
    image.width = image.width * scale ;
    image.height = image.height * scale ;
    return image;
  }
}