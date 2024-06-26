module.exports = async function (self) {
	let variables = []
	self.DATA = {}
	if (self.state.POWER != undefined) {
		variables.push(	{ variableId: 'POWER', name: 'Power state (ON, OFF)' } )
	}
	for (let i=1; i<11; i++) {
		if (self.state["POWER"+i] != undefined) {
			variables.push(	{ variableId: 'POWER'+i, name: 'Power state (ON, OFF)' } )
		}	
	}
	if (self.state.Color !== undefined) {
		variables.push(
			{ variableId: 'Dimmer', name: 'Dimmer level (0-100)' },
			{ variableId: 'Color', name: 'Color (RRGGBBWWWW)' },
			{ variableId: 'HSBColor', name: 'HSBColor (H,S,B)' },
			{ variableId: 'White', name: 'White (0-100)' },
			{ variableId: 'CT', name: 'Color temperature (153-500)' },
			{ variableId: 'HSBColor', name: 'HSBColor (H,S,B)' },
			{ variableId: 'Fade', name: 'Fade (ON, OFF)' },			
		)
	}
	self.setVariableDefinitions(variables)
	variables.forEach( (item) => {
		self.DATA[item.variableId] = self.state[item.variableId]
	})
}
