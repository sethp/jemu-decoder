export default {
	mask: '0100000----------101-----0110011',
	args: {
		rs2: ['24:20'],
		rs1: ['19:15'],
		rd: ['11:7']
	},
	exec: {
		$: 'rd = S(rs1) >> (rs2 & 0b111111n)'
	},
	meta: {
		encoding: 'R',
		importance: NaN
	}
}