import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { Profile } from '../sidebar/adviserData/Profile'
import { IziForm } from './IziForm'
import { modalState } from '@/app/store/modalState'
import { AiOutlineClose } from 'react-icons/ai'

export const PaymentModal = ({ token }: any) => {
  const showModal = modalState((state) => state.shown)
  const { hide } = modalState()
  return (
    <>
      <Modal
        open={true}
        className={`flex justify-center items-center ${
          showModal ? 'hidden' : ''
        }`}
      >
        <Box className="bg-[#FAFAFA] p-7 mx-2 border-black border-2 rounded-lg flex max-w-sm">
          <div className="flex flex-col justify-center items-center">
            <div className="w-full flex justify-end">
              <button className="text-end" onClick={() => hide(true)}>
                <AiOutlineClose />
              </button>
            </div>
            <Profile img="/logopayment.webp" />
            <IziForm token={token} />
          </div>
        </Box>
      </Modal>
    </>
  )
}
