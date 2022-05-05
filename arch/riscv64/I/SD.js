export default {
	mask: '-----------------011-----0100011',
	args: {
		rs2: ['24:20'],
		rs1: ['19:15'],
		imm: ['S32', '31:25', '11:7']
	},
	exec: {
		$: '[rs1 + sext(imm[11:5|4:0], 12), 64] = rs2'
	},
	meta: {
		encoding: 'S',
		importance: NaN
	}
}