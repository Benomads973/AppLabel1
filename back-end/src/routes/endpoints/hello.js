const world = (_, res) => {
    res.send('<h1>OK</h1>')
}
const Org = require('../../model/org')

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
const getOrg = async (_, res) => {

    try {
        const org = await Org.findOne()

        org ? res.json(org) : res.status(404).json({message : "Aucune organisation n'a été trouvée :("})

    } catch(err) {
        console.error("Erreur lors de la récupération de l'organisation : " + err)
        res.status(500).json({message : "Erreur serveur"})
    }



    // Simuler l'état de l'organisation
    // Dans ce cas, j'ai juste mis true
    // const isProvisioned = parseInt(req.query.test)

    // isProvisioned ? res.json(appData.provisioned) : res.json(appData.unprovisioned)
}

module.exports = { world, getOrg }