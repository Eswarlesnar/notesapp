const Header = ({toggleDarkMode}) => {
    const handleToggle = (e) => {
      toggleDarkMode(prev => !prev)
      const button = e.currentTarget;
      const rippleCircle  = document.createElement("span")
      const diameter = button.clientWidth
      rippleCircle.style.width = rippleCircle.style.height = `${diameter}px`
      rippleCircle.classList.add("ripple")
      let ripple = button.getElementsByClassName("ripple")[0]
      if(ripple){
        ripple.remove()
      }
      button.appendChild(rippleCircle)
    // rippleCircle.innerHTML = "messiah"
    // button.appendChild(rippleCircle)
    }
    return <div className="header">
        <div className="notes-header">
            <span style = {{"--i" : "1"}}>N</span>
            <span style = {{"--i" : "2"}}>O</span>
            <span style = {{"--i" : "3"}}>T</span>
            <span style = {{"--i" : "4"}}>E</span>
            <span style = {{"--i" : "5"}}>S</span>
            <span style = {{"--i" : "6"}}>.</span>
            <span style = {{"--i" : "7"}}>.</span>
            <span style = {{"--i" : "8"}}>.</span>
        </div>
        <button className="toggle" onClick = {(e) => handleToggle(e)}>toggle</button>
    </div>
}

export default Header