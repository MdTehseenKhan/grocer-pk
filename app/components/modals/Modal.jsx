"use client"

import { useCallback, useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io"

import { Button } from "@/app/components"

const Modal = ({
  isOpen,
  onSubmit,
  title,
  children,
  actionLabel,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen)

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => {
    if (disabled) {
      return
    }

    setShowModal(false)
  }, [disabled])

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return
    }

    onSubmit()
    // setShowModal(false)
  }, [onSubmit, disabled])

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return
    }

    secondaryAction()
  }, [secondaryAction, disabled])

  if (!isOpen) {
    return null
  }

  return (
    <>
      <div
        className={`
          flex 
          justify-center 
          items-center 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          bg-neutral-800/70
          ${showModal ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        <div
          className="
            relative 
            w-full
            md:w-4/6
            lg:w-3/6
            xl:w-2/5
            my-6
            mx-auto 
            h-full 
            lg:h-auto
            md:h-auto
          "
        >
          {/*content*/}
          <div
            className={`
            translate
            duration-300
            h-full
            ${showModal ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
          `}
          >
            <div
              className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-white 
            "
            >
              {/*header*/}
              <div
                className="
                flex 
                items-center 
                p-6
                rounded-t
                justify-center
                relative
                border-b-[1px]
                "
              >
                <button
                  className="
                    p-1
                    border-0 
                    hover:opacity-70
                    transition
                    absolute
                    right-9
                  "
                  onClick={handleClose}
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">{children}</div>
              {/*footer*/}
              <div className="flex flex-col gap-2 p-6">
                <div
                  className="
                    relative
                    flex 
                    flex-row 
                    items-center 
                    gap-4 
                    w-full
                  "
                >
                  {secondaryAction && secondaryActionLabel && (
                    <Button disabled={disabled} onClick={handleSecondaryAction}>
                      {secondaryActionLabel}
                    </Button>
                  )}
                  <Button disabled={disabled} onClick={handleSubmit}>
                    {actionLabel}
                  </Button>
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
