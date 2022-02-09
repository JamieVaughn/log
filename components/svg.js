import prefix from '../constants'

export default function (props) {
  console.log(prefix)
  const {width = 196, height = 196, pick = 0, source, style} = props
  const svgs = [
    'target',
    'nature',
    'garden',
    'astronomy',
    'mountain',
    'island',
    'race',
    'balloon',
    'ai',
    'caveman',
    'building',
    'clock',
    'forest',
  ]
  const len = svgs.length
  const path = source ? source : svgs[pick%len]
  return (
    <img src={prefix + `svg/${path}.svg`} height={height} width={width} style={style} {...props} />
  )
}
