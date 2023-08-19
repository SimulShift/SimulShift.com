import {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import {Switch, Tooltip} from '@mui/joy'
import {redirect} from 'react-router-dom'
import UrlBuilder, {AuthEndPoints} from '../../../utils/UrlBuilder'
import {useLoginContext} from '../../../auth/LoginContext'
import {TwitchUserData} from '../../../navbar/components/pfp/pfpHelpers'
import {joinChannel, leaveChannel} from '../../../services/twitch/UserServices'

const activeToggle = 'Your Chatbot is Online! Give chad  a command in your twitch channel'
const inactiveToggle =
  'Your Chatbot is Offline! Turn it on to give chad commands in your twitch channel'

export const MuiSwitchLarge = styled(Switch)(({theme}) => ({
  width: 150,
  height: 70,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    top: '50%',
    padding: 0,
    transform: 'translateY(-50%) translateX(6px)',
    '&.Mui-checked': {
      transform: 'translateX(85px) translateY(-50%)',
    },
  },
  '& .MuiSwitch-thumb': {
    width: 32,
    height: 32,
  },
  '& .MuiSwitch-track': {
    borderRadius: 30,
  },
}))

type BotSwitchProps = {
  online: boolean
  setOnline: (online: boolean) => void
}

const BotSwitch = ({online, setOnline}: BotSwitchProps) => {
  const loginContext = useLoginContext()
  const defaultActiveToggle = activeToggle ?? 'Switched On'
  const defaultInactiveToggle = inactiveToggle ?? 'Switched Off'
  const [profile, setProfile] = useState<TwitchUserData>()

  useEffect(() => {
    // Check if the sessionId and profile cookies exist
    if (!loginContext.profile) {
      // If either of the cookies is missing, redirect the user to the login page
      const loginUrl = new UrlBuilder().auth(AuthEndPoints.twitch).build()
      redirect(loginUrl)
    } else {
      setProfile(loginContext.profile)
    }
    // Add the dependencies array to avoid unnecessary redirects on every render
  }, [])

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked

    console.log('Switch pressed! checked:', checked)

    if (!profile) {
      console.log('SessionId or Profile state has not loaded in yet!')
      return
    }

    const joined = checked
      ? await joinChannel(profile.displayName, profile.id)
      : await leaveChannel(profile.displayName, profile.id)

    console.log('Processing Finished, joined:', joined)
    setOnline(joined)
  }

  return (
    <Tooltip title={online ? defaultActiveToggle : defaultInactiveToggle} arrow>
      <MuiSwitchLarge size="md" sx={{m: 2}} checked={online ?? false} onChange={handleChange} />
    </Tooltip>
  )
}
export default BotSwitch
