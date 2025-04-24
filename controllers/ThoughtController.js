module.exports = class ThoughtController {
    static async showThoughts(req, res) {
        res.render('thoughts/home')
    }
}