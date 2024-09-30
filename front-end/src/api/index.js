const domain = process.env.NODE_ENV === 'development' ? 'https://back-manager.benomads.fr' : `https://back-${window.location.host}`

export default domain