const world = (_, res) => {
    res.send('<h1>OK</h1>')
}

// Simulation de la base de donnée
const appData = {
    provisioned: {
        org : "Lidl"
    },
    unprovisioned: {
        org : "Marque Blanche"
    }
}

// Endpoints
// Retourner le nom de l'organisation
// Créer un Getteur
const getOrg = (req, res) => {
    // Simuler l'état de l'organisation
    // Dans ce cas, j'ai juste mis true
    const isProvisioned = parseInt(req.query.test)

    isProvisioned ? res.json(appData.provisioned) : res.json(appData.unprovisioned)
}

module.exports = { world, getOrg }
