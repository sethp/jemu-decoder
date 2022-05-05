export default {
	mask: '0000000----------001-----0111011',
	args: {
		rs2: ['24:20'],
		rs1: ['19:15'],
		rd: ['11:7']
	},
	exec: {
		$: 'rd = sext((rs1 << zext(rs2, 5)), 32)'
	},
	meta: {
		encoding: 'R',
		importance: NaN
	}
}