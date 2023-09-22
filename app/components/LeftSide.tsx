import { CardBenefit } from './CardBenefit'
import PhonelinkIcon from '@mui/icons-material/Phonelink'
import HandshakeIcon from '@mui/icons-material/Handshake'
import PeopleIcon from '@mui/icons-material/People'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'

const benefits = [
  {
    title: 'Asesoría Online Multidispositivo',
    description:
      'Asesoría online en Vivo. Sesiones grabadas. Míralas donde y cuando quieras',
    icon: <PhonelinkIcon sx={{ color: '#0090D4', fontSize: '82px' }} />,
  },
  {
    title: 'Asesoría Personalizada',
    description: 'Tendrás contacto directo con tu asesor',
    icon: <HandshakeIcon sx={{ color: '#0090D4', fontSize: '82px' }} />,
  },
  {
    title: 'Orientación Financiera',
    description:
      'El asesor verá tu situación financiera y te orientará para que alcances tus metas',
    icon: <PeopleIcon sx={{ color: '#0090D4', fontSize: '82px' }} />,
  },
  {
    title: 'Atención al Cliente 24/7',
    description: '¿Tienes alguna duda? Contáctanos y te ayudaremos',
    icon: <SupportAgentIcon sx={{ color: '#0090D4', fontSize: '82px' }} />,
  },
]

export const LeftSide = () => {
  return (
    <div className="hidden flex-col px-4 bg-[#e7ecef] items-center md:w-3/4 gap-5 overflow-hidden md:flex">
      <h1 className="text-xl pt-5 text-[#42494BE0]">ASESORÍA FINANCIERA</h1>
      <h2 className="text-xl pb-5 lg:text-2xl flex">
        <b className="text-[#0090D4]">Ventajas&nbsp;</b> de asesorarte con
        nosotros
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:flex gap-5 h-2/3 content-center">
        {benefits.map((benefit) => (
          <CardBenefit
            key={benefit.title}
            title={benefit.title}
            description={benefit.description}
            icon={benefit.icon}
          />
        ))}
      </div>
    </div>
  )
}
