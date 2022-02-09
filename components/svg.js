export default function (props) {
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
    <img src={`svg/${path}.svg`} height={height} width={width} style={style} {...props} />
  )
}
