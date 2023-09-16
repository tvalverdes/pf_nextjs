import { Asesor } from './Asesor'
import { Profile } from './Profile'
import { Tag } from './Tag'

export const AdviserData = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Asesor />
        <Tag />
      </div>
      <div>
        <Profile />
      </div>
    </div>
  )
}
