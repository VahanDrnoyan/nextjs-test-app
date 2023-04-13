import Image from "next/image"
import { Inter } from "next/font/google"
import Link from "next/link"
import { SetStateAction, useEffect, useState } from "react"
import ImageCard from "@/components/site/ImageCard"
import EditorModal from "@/components/site/EditorModal"
import ImageCanvas from "@/components/site/ImageCanvas"
import RequestEdit from "@/components/site/RequestEdit"
import { trpc } from "../utils/trpc"
import Message from "@/components/site/Message"
const imagesArray = require("../images.json")
const inter = Inter({ subsets: ["latin"] })
export type ImageType = {
  id: number
  is_edited: Boolean
  original_url: string
  new_url: string
  edited_text: string
}
export default function Site() {
  const [images, setImages] = useState<ImageType[]>(imagesArray)
  const [isVisible, setIsVsible] = useState<boolean>(false)
  const [showMessage, setShowMessage] = useState<boolean>(false)
  const [isRequestEditVisible, setRequestEditIsIsVisible] =
    useState<boolean>(false)
  const [currentImage, setCurrentImage] = useState<ImageType | null>(null)
  const [updatedImage, setUpdatedImage] = useState<ImageType | null>(null)
  const mutation = trpc.saveData.useMutation()
  const isDefined = <T extends unknown>(
    value: T | undefined
  ): value is Exclude<T, undefined> => value !== undefined

  const handleSaveAllData = () => {
    const dataToBeSaved = images.map((image) => {
      if (image.is_edited) {
        console
        let shortenedUrl = ""
        if (image.new_url) {
          shortenedUrl = image.new_url
        }
        return {
          id: image.id,
          edited_text: image.edited_text,
          new_url: shortenedUrl.slice(0, 200),
        }
      }
    })
    const filteredData = dataToBeSaved.filter(isDefined)
    console.log(filteredData, 3333)
    if (filteredData) {
      mutation.mutate(filteredData)
      if (mutation.data?.success || mutation.error?.message) {
        setShowMessage(true)
      }
    }
  }
  //state to trigger rerender for edited images to be shown instantly
  const [rerender, setRerender] = useState(false)
  useEffect(() => {
    if (updatedImage) {
      images.map((image: ImageType) => {
        if (image.id === updatedImage.id) {
          image.new_url = updatedImage.new_url
          image.is_edited = updatedImage.is_edited
          image.edited_text = updatedImage.edited_text
        }
        return image
      })
    }
    // we do not list rerender in dependencies
    setRerender(!rerender)
  }, [images, updatedImage])

  return (
    <>
      {mutation.data?.success && (
        <Message
          message={mutation.data?.success}
          type={"success"}
          show={showMessage}
          setShow={setShowMessage}
        ></Message>
      )}
            {mutation.error?.message && (
        <Message
          message={mutation.error?.message}
          type={"error"}
          show={showMessage}
          setShow={setShowMessage}
        ></Message>
      )}

      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 my-20 text-center">
        <div className="flex justify-end mb-3">
          <button
            onClick={handleSaveAllData}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save all data via server
          </button>
          <Link
            className="rounded-md ml-2 bg-indigo-50  px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
            href="/output.json"
            target="_blank"
          >
            View output file
          </Link>
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {images &&
            images.map((image) => {
              return (
                <ImageCard
                  key={image.id + "image_list_item"}
                  image={image}
                  setCurrentImage={setCurrentImage}
                  setOpen={setIsVsible}
                  setRequestEditOpen={setRequestEditIsIsVisible}
                ></ImageCard>
              )
            })}
        </ul>
      </div>
      {currentImage && (
        <>
          <EditorModal
            open={isVisible}
            setOpen={setIsVsible}
            image={currentImage}
          >
            <ImageCanvas
              setOpen={setIsVsible}
              originalImage={currentImage}
              pixelSize={30}
              color={"white"}
              setUpdatedImage={setUpdatedImage}
            ></ImageCanvas>
          </EditorModal>
          {isRequestEditVisible && (
            <EditorModal
              open={isRequestEditVisible}
              setOpen={setRequestEditIsIsVisible}
              image={currentImage}
            >
              <RequestEdit
                setOpen={setRequestEditIsIsVisible}
                setUpdatedImage={setUpdatedImage}
                image={currentImage}
              ></RequestEdit>
            </EditorModal>
          )}
        </>
      )}
    </>
  )
}