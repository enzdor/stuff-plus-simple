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
					// production path is /stuff-plus-simple/dist/test.db
					// dev path is        /dist/test.db
					// url: "/dist/test.db",
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

		const pitcherName = document.getElementById("pName").value
		const pitcherId = document.getElementById("pId").value
		const sortBy = document.getElementById("sortBy").value
		const direction = document.getElementById("direction").value
		const variable = document.getElementById("variable").value

		cleanTable()

		// const result = await worker.db.query(`select * from pitchers where pitcher_name like '%${pitcherName}%' and pitcher_id like '%${pitcherId}%' order by ${columns[sortBy]} ${direction}`);
		const result = await worker.db.query(`
			select * from ${variable}
			inner join pitchers
			on ${variable}.pitcher_id = pitchers.pitcher_id
			where pitcher_name like '%${pitcherName}%' 
			and pitchers.pitcher_id like '%${pitcherId}%' 
			order by ${sortBy} ${direction}
		`);

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





