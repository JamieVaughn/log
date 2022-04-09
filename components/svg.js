import prefix from '../constants'

export default function (props) {
  const {width = 196, height = 196, pick = 1, source, style} = props
  const svgs = [
    'mountain',
    'target',
    'island',
    'nature',
    'garden',
    'astronomy',
    'ai',
    'race',
    'protect',
    'construction',
    'building',
    'clock',
    'forest',
    'ship',
    'robot',
    'grow',
    'caveman',
    'balloon',
  ]
  const len = svgs.length
  const path = source ? source : svgs[pick%len]
  return (
    <img src={prefix + `svg/${path}.svg`} height={height} width={width} style={style} {...props} />
  )
}
