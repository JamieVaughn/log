export default function (props) {
  const {width = 196, height = 196, pick = 0, source, style} = props
  const svgs = [
    'mountain',
    'race',
    'astronomy',
    'caveman',
    'island',
    'target',
    'nature',
    'garden',
  ]
  const len = svgs.length
  const path = source ? source : svgs[pick%len]
  return (
    <img src={`svg/${path}.svg`} height={height} width={width} style={style} {...props} />
  )
}
