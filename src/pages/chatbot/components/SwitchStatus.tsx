import {Typography} from '@mui/joy'
import {Personality} from '../../../Protos/TwitchBot_pb'
import {mapPersonalityToString} from '../../../ProtoUtils'

type BotStatusProps = {
  status: boolean
  statusText?: string
  personality: Personality
}

const BotStatus = ({status, statusText, personality}: BotStatusProps) => {
  return (
    <>
      <Typography>Personality: {mapPersonalityToString(personality)}</Typography>
      <Typography>
        {statusText} {status}
      </Typography>
    </>
  )
}

export default BotStatus
