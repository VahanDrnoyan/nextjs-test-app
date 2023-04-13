import { ImageType } from '@/pages/site'
import React, { useRef, useState, useEffect, Dispatch, SetStateAction } from 'react';
type ImageCanvasProps = {
    originalImage: ImageType,
    pixelSize: number,
    color: string,
    setUpdatedImage: Dispatch<SetStateAction<ImageType | null>>
setOpen:Dispatch<SetStateAction<boolean>>,
}

const ImageCanvas: React.FC<ImageCanvasProps> = ({ originalImage, pixelSize, color, setOpen, setUpdatedImage}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [drawing, setDrawing] = useState(false);
const [image, setImage]= useState<HTMLImageElement | null>(null)
  //bypass cors issue to make image editable
  useEffect(()=> {
    const proxyURL = 'https://cors-anywhere.herokuapp.com/';
    const image = new Image();
    image.crossOrigin = 'anonymous'; // Important: set the crossOrigin attribute
    image.src = proxyURL + originalImage.original_url; // Prepend the proxy URL to the image source
    image.onload = () => {
      setImage(image)
    };
  }, [originalImage]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if(canvas){
    const ctx = canvas.getContext('2d');
    
    if(image){
      ctx?.drawImage(image, 0, 0, canvas.width, canvas.height);
    }
    
    }
  }, [image]);

  const drawPixel = (e: { clientX: number; clientY: number }) => {
    
    const canvas = canvasRef.current;
    if(canvas){
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor(e.clientX - rect.left);
    const y = Math.floor(e.clientY - rect.top);
    if(ctx){
    ctx.fillStyle = color;
    
    ctx.fillRect(x, y, pixelSize, pixelSize);
    }
  };
}

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    if (!drawing) return;
    drawPixel(e);
  };

  const handleMouseDown = (e: { clientX: number; clientY: number }) => {
    setDrawing(true);
    drawPixel(e);
  };

  const handleMouseUp = () => {
    setDrawing(false);
  };

  const saveImage = () => {
    const canvas = canvasRef.current;
    if(canvas && !drawing){
    const dataUrl = canvas.toDataURL('image/png');
    setUpdatedImage({...originalImage, new_url: dataUrl, is_edited: true })
    //close modal
    setOpen(false)
    
    }
  };
  return (
    <div>
      <canvas
        ref={canvasRef}
        width={600}
        height={480}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />
      <button onClick={saveImage}>Save Image</button>
    </div>
  );

}
export default ImageCanvas;