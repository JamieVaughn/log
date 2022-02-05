import './mixblendmode.module.css'

export default function MixBlendMode () {

  const resetBG = () => {
    document.querySelector('#mix-blend-mode header').style.setProperty('background-image', 'none'); 
}
const pickColor = (e) => {
//             document.querySelector('#picker').addEventListener('change', function(e) {
         
//  console.log(e.target.value) 
//  document.querySelector('header').style.setProperty('background-image', 'none');
    resetBG()
    document.querySelector('#mix-blend-mode header').style.setProperty('background-color', e.target.value)
                                         
}
const toggleColor = (e) => {
    resetBG()
    document.querySelector('#mix-blend-mode header').style.setProperty('background-color', ['#eee', '#222'][Number(e.target.value)])
}
const selectBG = (e) => {
    document.querySelector('#mix-blend-mode header').style.setProperty('background-image', `url(${e.target.value})`)
}

  return (
    <div id='mix-blend-mode'>
        <input id='picker' type="color" onChange={pickColor} />

        <input id='toggle' type="range" min="0" max="1" step="1" onChange={toggleColor}/>

        <select id='select-img' name='bg-image' onChange={selectBG}>
            <option disabled selected>Select Image</option>
            <option value="https://images.unsplash.com/photo-1485949870685-e1d7ea5a1c53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">Stratospheric</option>  
            <option value="https://images.unsplash.com/photo-1445905595283-21f8ae8a33d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80">Celestial</option>  
            <option value="https://images.unsplash.com/photo-1604599340287-2042e85a3802?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80">Underwater</option>
            
            <option value="https://images.unsplash.com/photo-1429734956993-8a9b0555e122?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1079&q=80">Sunset</option>
            <option value="https://images.unsplash.com/photo-1517913174253-45ab9b0f8b21?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1236&q=80">Crosswalk</option>
            <option value="https://images.unsplash.com/photo-1616067064617-31a11565509d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80">Oil Slick</option>
        </select>
        <header>
            <h1>
                Hello
                <span>
                Mix Blend Mode!
                </span>
                <svg viewBox="0 0 1000 32" xmlns="http://www.w3.org/2000/svg">
                    <text x='20' y='20' fill='white' font-size='16px'>Thanks CSS!</text>
                </svg>
            </h1>
        </header>
    </div>
  )
}
