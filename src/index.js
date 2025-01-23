import { createDbWorker } from "sql.js-httpvfs";

const workerUrl = new URL(
	"sql.js-httpvfs/dist/sqlite.worker.js",
	import.meta.url
);
const wasmUrl = new URL("sql.js-httpvfs/dist/sql-wasm.wasm", import.meta.url);

let worker;

try {
	worker = await createDbWorker(
		[
			{
				from: "inline",
				config: {
					serverMode: "full",
					url: "/stuff-plus-simple/dist/test.db",
					requestChunkSize: 4096,
				},
			},
		],
		workerUrl.toString(),
		wasmUrl.toString()
	);
} catch (e) {
	console.log(e)
}



class EntryPoint {
	static async load() {

		const pitchType = document.getElementById("pType").value
		const pitcherName = document.getElementById("pName").value
		const pitcherId = document.getElementById("pId").value
		const FF_avg_x_rv100 = document.getElementById("FF_avg_x_rv100").value
		const SI_avg_x_rv100 = document.getElementById("SI_avg_x_rv100").value
		const FC_avg_x_rv100 = document.getElementById("FC_avg_x_rv100").value
		const CH_avg_x_rv100 = document.getElementById("CH_avg_x_rv100").value
		const FS_avg_x_rv100 = document.getElementById("FS_avg_x_rv100").value
		const FO_avg_x_rv100 = document.getElementById("FO_avg_x_rv100").value
		const SC_avg_x_rv100 = document.getElementById("SC_avg_x_rv100").value
		const CU_avg_x_rv100 = document.getElementById("CU_avg_x_rv100").value
		const KC_avg_x_rv100 = document.getElementById("KC_avg_x_rv100").value
		const CS_avg_x_rv100 = document.getElementById("CS_avg_x_rv100").value
		const SL_avg_x_rv100 = document.getElementById("SL_avg_x_rv100").value
		const ST_avg_x_rv100 = document.getElementById("ST_avg_x_rv100").value
		const SV_avg_x_rv100 = document.getElementById("SV_avg_x_rv100").value
		const KN_avg_x_rv100 = document.getElementById("KN_avg_x_rv100").value

		const columns = Object.freeze({
			pid: "pitcher_id",
			pn: "pitcher_name",
			FF_avg_x_rv100: "FF_avg_x_rv100",
			SI_avg_x_rv100: "SI_avg_x_rv100",
			FC_avg_x_rv100: "FC_avg_x_rv100",
			CH_avg_x_rv100: "CH_avg_x_rv100",
			FS_avg_x_rv100: "FS_avg_x_rv100",
			FO_avg_x_rv100: "FO_avg_x_rv100",
			SC_avg_x_rv100: "SC_avg_x_rv100",
			CU_avg_x_rv100: "CU_avg_x_rv100",
			KC_avg_x_rv100: "KC_avg_x_rv100",
			CS_avg_x_rv100: "CS_avg_x_rv100",
			SL_avg_x_rv100: "SL_avg_x_rv100",
			ST_avg_x_rv100: "ST_avg_x_rv100",
			SV_avg_x_rv100: "SV_avg_x_rv100", 		
			KN_avg_x_rv100: "KN_avg_x_rv100",
		})

		cleanTable()

		const result = await worker.db.query(`select * from pitchers where pitcher_name like '%${pitcherName}%' and pitcher_id like '%${pitcherId}%' order by ${columns[sortBy]} ${direction}`);

		for (let i = 0; i < result.length; i++) {
			newRow(result[i])
		}
		return
	}
}

function cleanTable() {
	const table = document.getElementById("dataTable")

	while (table.rows.length > 1) {
		table.deleteRow(1)
	}
}


function newRow(rowValues) {
	const table = document.getElementById("dataTable")
	const row = table.insertRow(1)

	const id = row.insertCell(0)
	id.innerHTML = rowValues.pitcher_id
	const name = row.insertCell(1)
	name.innerHTML = rowValues.pitcher_name
	const FF_avg_x_rv100 = row.insertCell(2)
	FF_avg_x_rv100.innerHTML = rowValues.FF_avg_x_rv100
	const SI_avg_x_rv100 = row.insertCell(3)
	SI_avg_x_rv100.innerHTML = rowValues.SI_avg_x_rv100
	const FC_avg_x_rv100 = row.insertCell(4)
	FC_avg_x_rv100.innerHTML = rowValues.FC_avg_x_rv100
	const CH_avg_x_rv100 = row.insertCell(5)
	CH_avg_x_rv100.innerHTML = rowValues.CH_avg_x_rv100
	const FS_avg_x_rv100 = row.insertCell(6)
	FS_avg_x_rv100.innerHTML = rowValues.FS_avg_x_rv100
	const FO_avg_x_rv100 = row.insertCell(7)
	FO_avg_x_rv100.innerHTML = rowValues.FO_avg_x_rv100
	const SC_avg_x_rv100 = row.insertCell(8)
	SC_avg_x_rv100.innerHTML = rowValues.SC_avg_x_rv100
	const CU_avg_x_rv100 = row.insertCell(9)
	CU_avg_x_rv100.innerHTML = rowValues.CU_avg_x_rv100
	const KC_avg_x_rv100 = row.insertCell(10)
	KC_avg_x_rv100.innerHTML = rowValues.KC_avg_x_rv100
	const CS_avg_x_rv100 = row.insertCell(11)
	CS_avg_x_rv100.innerHTML = rowValues.CS_avg_x_rv100
	const SL_avg_x_rv100 = row.insertCell(12)
	SL_avg_x_rv100.innerHTML = rowValues.SL_avg_x_rv100
	const ST_avg_x_rv100 = row.insertCell(13)
	ST_avg_x_rv100.innerHTML = rowValues.ST_avg_x_rv100
	const SV_avg_x_rv100 = row.insertCell(14)
	SV_avg_x_rv100.innerHTML = rowValues.SV_avg_x_rv100
	const KN_avg_x_rv100 = row.insertCell(15)
	KN_avg_x_rv100.innerHTML = rowValues.KN_avg_x_rv100

}

window.EntryPoint = EntryPoint





