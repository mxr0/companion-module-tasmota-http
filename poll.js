module.exports = async function (self) {
    var state = await self.runCommand("State")
    for (let key in self.DATA) {
        self.DATA[key] = state[key]
    }
    self.setVariableValues(self.DATA)
    self.checkFeedbacks()
}