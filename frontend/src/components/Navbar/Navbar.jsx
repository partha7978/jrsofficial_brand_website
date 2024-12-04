
const Navbar = () => {
  return (
    <section className='app__navbar'>
        <div className='app__navbar-logo'>
            {/* <img src={images.logo} alt='logo' /> */}
            <p className='logo-name'>The JRS Show</p>
        </div>
        <div className='app__navbar-links'>
            <div className='app__navbar-links-item'>
                <a href='#home'>Home</a>
            </div>
            <div className='app__navbar-links-item'>
                <a href='#about'>About</a>
            </div>
            <div className='app__navbar-links-item'>
                <a href='#contact'>Contact</a>
            </div>
        </div>
        <div className='app__navbar-redirect'>
            <a href='https://github.com/partha7978' target='_blank' rel="noreferrer">
                <button>Watch Latest Episode</button>
            </a>
        </div>
    </section>
  )
}

export default Navbar