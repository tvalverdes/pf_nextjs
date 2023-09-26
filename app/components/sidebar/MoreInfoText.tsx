import { TextareaAutosize } from '@mui/base/TextareaAutosize'
import { useAppointmentContext } from './context'
import { useState } from 'react'

export const MoreInfoText = () => {
  const { appointment, updateAppointment } = useAppointmentContext()
  const [helper, setHelper] = useState('')
  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newComment = event.target.value
    updateAppointment({ ...appointment, comment: newComment.trim() })

    if (newComment.length > 200) {
      setHelper('No ingreses más de 200 caracteres')
    } else {
      setHelper('')
    }
  }
  return (
    <div className="w-full">
      <TextareaAutosize
        className="w-full text-sm font-normal font-sans leading-5 p-3 rounded-xl rounded-br-none shadow-md shadow-slate-100  focus:shadow-outline-purple  focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500  focus:border-blue-500  bg-white  text-slate-900  focus-visible:outline-0"
        aria-label="Demo input"
        placeholder="¿Qué te gustaría conversar con el asesor?"
        maxLength={200}
        onChange={handleCommentChange}
      />
    </div>
  )
}
