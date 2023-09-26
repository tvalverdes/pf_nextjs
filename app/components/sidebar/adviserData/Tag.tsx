import { Time } from './Time'
import { Profile } from './Profile'
export const Tag = () => {
  return (
    <>
      <div className="flex gap-2">
        <span className="text-white main-bg-color w-fit px-2 py-0.5 text-xs -tracking-tighter rounded-md">
          FINANZAS
        </span>
        <Time />
      </div>
      <span>S/55</span>
    </>
  )
}
