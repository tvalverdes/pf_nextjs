import { Asesor } from './Asesor'
import { Profile } from './Profile'
import { Tag } from './Tag'

export const AdviserData = () => {
  return (
    <div className="flex justify-between items-center pb-6">
      <div>
        <Asesor />
        <Tag />
      </div>
      <div>
        <Profile img="/andres_valverde.webp" />
      </div>
    </div>
  )
}
