export const saveData = async (req, res) => {
    try {
        const data = req.body
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(401).send("Internal server error")
    }
}