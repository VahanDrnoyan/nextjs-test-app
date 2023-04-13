import { ImageType } from '@/pages/site'

import React, { Dispatch, SetStateAction, useState } from 'react';
type Props = {
    image: ImageType,
    setOpen:Dispatch<SetStateAction<boolean>>,
    setUpdatedImage: Dispatch<SetStateAction<ImageType | null>>



}
const RequestEdit: React.FC<Props> = ({image, setOpen, setUpdatedImage})=> {
    const [comment, setComment] = useState('')
const handleSubmitComment = ()=>{
    setUpdatedImage({...image, edited_text: comment, is_edited: true })
    setOpen(false)
}
  return (

      <div className="min-w-1/2 flex items-start space-x-4">
        <div className="min-w-1/2 flex-1">
            <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
              <label htmlFor="comment" className="sr-only">
                Add your comment
              </label>
              <textarea
                rows={3}
                name="comment"
                value={comment}
                onChange={(e)=>setComment(e.target.value)}
                id="comment"
                className="block w-full resize-none border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:py-1.5 sm:text-sm sm:leading-6"
                placeholder="Add your comment..."
              />
  
            </div>
  
            <div className="flex justify-end">
              <div className="flex-shrink-0">
                <button
                onClick={handleSubmitComment}
                  type="submit"
                  className="inline-flex items-center rounded-md mt-2 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  Post
                </button>
              </div>
            </div>
        </div>
      </div>
    )
};

export default RequestEdit;

