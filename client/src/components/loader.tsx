import '../scss/components/loader.scss'

const Loader = () => {
    return <div className='loading-container'>
        <span className="loader"/>
        <p>Reinitializing server: may take a few minutes due to using Neon's free servers tier. Please don't leave <span>&#128557;</span></p>
        </div>
}

export default Loader