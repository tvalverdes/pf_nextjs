import { PUBLIC_PROD_KEY } from '@/app/config'
import Script from 'next/script'

export const IziForm = ({ token }: any) => {
  return (
    <>
      <Script
        type="text/javascript"
        src="https://static.micuentaweb.pe/static/js/krypton-client/V4.0/stable/kr-payment-form.min.js"
        kr-public-key={PUBLIC_PROD_KEY}
        kr-get-url-success="https://asesoria.pasionporlasfinanzas.com/success"
      />
      <div className="w-full mb-5">
        <h2 className="text-center font-semibold text-slate-700">
          Pasión por las Finanzas
        </h2>
      </div>
      <div className="border-t-2 border-b-2 p-3 flex justify-between  w-[90%]">
        <p className="text-sm font-normal text-[#717171] ">x1 Asesoría</p>
        <p className="text-sm text-[#717171] font-normal">S/65</p>
      </div>
      <div id="iziform" className="kr-embedded" kr-form-token={token}>
        <div className="kr-pan">Número de tarjeta</div>
        <div className="kr-expiry"></div>
        <div className="kr-security-code"></div>

        <button className="kr-payment-button">Pagar</button>

        <div className="kr-form-error"></div>
      </div>
    </>
  )
}
