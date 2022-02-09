import 'join.module.css'

export default function Join({env}) {
  const recaptcha = React.useRef(null)
  const modal = React.useRef(null)

  React.useEffect(() => {
      let status = (window || globalThis).localStorage.getItem('joinedwjv')
      if(status === 'success') dismissJoin()
  }, [])
  const recaptchaCallback = () => {
    document.querySelector('footer form input[type=submit]').removeAttribute('disabled');
}
const recaptchaCallback2 = () => {
  var live = document.querySelector('#time');
  live.value = new Date();
  document.querySelector('[name=redirect_to]').value = (window || globalThis).location.href
  document.querySelector('section form input[type=submit]').removeAttribute('disabled');
}
const dismissJoin = (e, str) => {
  if(str === 'success') {
    (window || globalThis).localStorage.setItem('joinedwjv', 'success')
  } else{
    return modal.remove()
  }
}
  return (
    <section id="ContactMe" href="#ContactMe" ref={modal}>
        
        <form id="ajax-contact" method="post" v-bind:class="env" action="https://getsimpleform.com/messages?form_api_token=8d73f78e270ace7eeda7529329d6a348">
            <input type='hidden' name='redirect_to' id="redirect" value="https://wjv.io/blog" />
            <input type='hidden' name="time" id="time" />
            <h3>Join for updates by email! <span class='dismiss' onClick={dismissJoin}>╳</span></h3>
            <div id="form-feedback" class="hidden">Submitted successfully! Thank you! I'll be in touch shortly.</div>

            <input name="name" type="name" id="name" required />
            <label class="name" for="name">Your Name:</label>
            
            <input name="email" type="email" id="email" pattern=".+@+.+\.[a-z]{2,5}$" required />
            <label class="email" for="email">Your Email:</label>
            <div class="controls">
                <div class="g-recaptcha" 
                data-sitekey="6Ldh-8kUAAAAAMYG8-BxodEZ4zxcn9uV8H4LKMOd"
                data-callback="recaptchaCallback"
                ></div>
                <input type="submit" onsubmit="postMsg" onClick={e => dismissJoin(e, 'success')} ref={recaptcha} disabled />
            </div>
        </form>
        <script src="https://www.google.com/recaptcha/api.js" async defer />        
    </section>
  )
}
