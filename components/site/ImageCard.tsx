import { ImageType } from '@/pages/site'
import Image from "next/image"

import React, { Dispatch, SetStateAction, useState } from 'react';
type Props = {
    image: ImageType,
    setCurrentImage:Dispatch<SetStateAction<ImageType | null>>
    setOpen:Dispatch<SetStateAction<boolean>>
    setRequestEditOpen: Dispatch<SetStateAction<boolean>>

}
const ImageCard: React.FC<Props> = ({image, setCurrentImage, setOpen, setRequestEditOpen})=> {

  const handleEditImageRequest = (image: ImageType) =>{
    setRequestEditOpen(true)
  }
  const handeleEditImage = (image: ImageType) => {
    setCurrentImage(image);
    setOpen(true)
  }
  return (          <li
        className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
      >
        <div className="flex flex-1 flex-col p-8">
          <Image className="mx-auto h-32 w-32 flex-shrink-0" src={image.new_url || image.original_url} width={400} height={400} alt="Editable image" />
        </div>
        <div>
          <div className="flex justify-center divide-x divide-gray-200 py-4 px-2">
      <button onClick={()=>handeleEditImage(image)} className="rounded-md mr-2 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Edit</button>

      <button onClick={()=>handleEditImageRequest(image)} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Request edit</button>

          </div>
        </div>
      </li>
);
};

export default ImageCard;

function setCurrentImage(image: ImageType) {
  throw new Error('Function not implemented.')
}
