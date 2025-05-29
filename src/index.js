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
	static async loadPlus() {

		const pitcherName = document.getElementById("pNamePlus").value
		const pitcherId = document.getElementById("pIdPlus").value
		const sortBy = document.getElementById("sortByPlus").value
		const direction = document.getElementById("directionPlus").value
		const variable = document.getElementById("variablePlus").value
		const season = document.getElementById("seasonPlus").value
		let minimumN = document.getElementById("minimumNPlus").value
		if (minimumN == "") {
			minimumN = "0"
		}
		let limit = document.getElementById("limitPlus").value
		if (limit == "") {
			limit = "100000"
		}

		cleanTable('dataTablePlus')

		// const result = await worker.db.query(`select * from pitchers where pitcher_name like '%${pitcherName}%' and pitcher_id like '%${pitcherId}%' order by ${columns[sortBy]} ${direction}`);
		const result = await worker.db.query(`
			select * from ${variable}
			inner join pitchers
			on ${variable}.pitcher_id = pitchers.pitcher_id
			where pitcher_name like '%${pitcherName}%' 
			and season like '%${season}%'
			and pitchers.pitcher_id like '%${pitcherId}%' 
			and N > ${minimumN}
			order by ${sortBy} ${direction}
			limit ${limit}
		`);

		for (let i = 0; i < result.length; i++) {
			newRowPlus(result[i])
		}
		return
	}

	static async loadNumber() {

		const pitcherName = document.getElementById("pNameNumber").value
		const pitcherId = document.getElementById("pIdNumber").value
		const sortBy = document.getElementById("sortByNumber").value
		const direction = document.getElementById("directionNumber").value
		const season = document.getElementById("seasonNumber").value
		let limit = document.getElementById("limitNumber").value
		if (limit == "") {
			limit = "100000"
		}

		cleanTable('dataTableNumber')

		// const result = await worker.db.query(`select * from pitchers where pitcher_name like '%${pitcherName}%' and pitcher_id like '%${pitcherId}%' order by ${columns[sortBy]} ${direction}`);
		const result = await worker.db.query(`
			select * from stuff_plus
			inner join pitchers
			on stuff_plus.pitcher_id = pitchers.pitcher_id
			where pitcher_name like '%${pitcherName}%' 
			and season like '%${season}%'
			and pitchers.pitcher_id like '%${pitcherId}%' 
			order by ${sortBy} ${direction}
			limit ${limit}
		`);

		for (let i = 0; i < result.length; i++) {
			newRowNumber(result[i])
		}
		return
	}

	static async loadRegressor() {

		const pitcherName = document.getElementById("pNameRegressor").value
		const pitcherId = document.getElementById("pIdRegressor").value
		const sortBy = document.getElementById("sortByRegressor").value
		const direction = document.getElementById("directionRegressor").value
		const season = document.getElementById("seasonRegressor").value
		const pitchType = document.getElementById("pitchTypeRegressor").value
		let minimumPtn = document.getElementById("minimumPtnRegressor").value
		if (minimumPtn == "") {
			minimumPtn = "0"
		}
		let limit = document.getElementById("limitRegressor").value
		if (limit == "") {
			limit = "100000"
		}

		cleanTable('dataTableRegressor')

		// const result = await worker.db.query(`select * from pitchers where pitcher_name like '%${pitcherName}%' and pitcher_id like '%${pitcherId}%' order by ${columns[sortBy]} ${direction}`);
		const result = await worker.db.query(`
			select * from stuff_regressors
			inner join pitchers
			on stuff_regressors.pitcher_id = pitchers.pitcher_id
			left join stuff_plus on stuff_regressors.pitcher_id = stuff_plus.pitcher_id
			and stuff_regressors.season = stuff_plus.season
			where pitcher_name like '%${pitcherName}%' 
			and stuff_regressors.season like '%${season}%'
			and pitch_type like '%${pitchType}%'
			and pitchers.pitcher_id like '%${pitcherId}%' 
			and
			(case
				when stuff_regressors.pitch_type like 'FF' then FF_n > ${minimumPtn}
				when stuff_regressors.pitch_type like 'SI' then SI_n > ${minimumPtn}
				when stuff_regressors.pitch_type like 'FC' then FC_n > ${minimumPtn}
				when stuff_regressors.pitch_type like 'CH' then CH_n > ${minimumPtn}
				when stuff_regressors.pitch_type like 'FS' then FS_n > ${minimumPtn}
				when stuff_regressors.pitch_type like 'FO' then FO_n > ${minimumPtn}
				when stuff_regressors.pitch_type like 'SC' then SC_n > ${minimumPtn}
				when stuff_regressors.pitch_type like 'CU' then CU_n > ${minimumPtn}
				when stuff_regressors.pitch_type like 'KC' then KC_n > ${minimumPtn}
				when stuff_regressors.pitch_type like 'CS' then CS_n > ${minimumPtn}
				when stuff_regressors.pitch_type like 'SL' then SL_n > ${minimumPtn}
				when stuff_regressors.pitch_type like 'ST' then ST_n > ${minimumPtn}
				when stuff_regressors.pitch_type like 'SV' then SV_n > ${minimumPtn}
				when stuff_regressors.pitch_type like 'KN' then KN_n > ${minimumPtn}
			end)
			order by ${sortBy} ${direction}
			limit ${limit}
		`);
		/*
		*/

		for (let i = 0; i < result.length; i++) {
			newRowRegressor(result[i])
		}
		return
	}

	static async loadPlayground() {
		try {
			const input = document.getElementById("playground-input").value

			const result = await worker.db.query(input)
			const columns = Object.keys(result[0]);

			const rawText = [
				columns.join("|"),
				"-".repeat(columns.join("|").length),
				...result.map(row => columns.map(col => row[col] !== null ? row[col] : '').join("|")) // Join each row's values with a pipe (|) separator
			].join("\n");
			document.getElementById("playground-output").innerHTML = rawText
		} catch (e) {
			document.getElementById("playground-output").innerHTML = e
		}
	}

	static hideRest(toNotHide) {
		let elementsNot = document.getElementsByClassName(toNotHide)
		let titleNot = document.getElementById('h-' + toNotHide)
		titleNot.style.color = "blue";

		for (let i = 0; i < elementsNot.length; i++) {
			elementsNot[i].style.display = "flex";
		}

		const opts = ['plus-search', 'number-search', 'regressor-search', 'playground-search']
		const index = opts.indexOf(toNotHide)
		opts.splice(index, 1)

		for (let i in opts) {
			let elements = document.getElementsByClassName(opts[i])
			let title = document.getElementById('h-' + opts[i])
			for (let i = 0; i < elements.length; i++) {
				elements[i].style.display = "none";
			}
			title.style.color = "black";
		}
	}
}

function cleanTable(tableName) {
	const table = document.getElementById(tableName)

	while (table.rows.length > 1) {
		table.deleteRow(1)
	}
}


function newRowPlus(rowValues) {
	const table = document.getElementById('dataTablePlus')
	const row = table.insertRow(-1)

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
	const ovr = row.insertCell(16)
	ovr.innerHTML = rowValues.arsenal_avg
	const seasonYear = row.insertCell(17)
	seasonYear.innerHTML = rowValues.season

}

function newRowNumber(rowValues) {
	const table = document.getElementById('dataTableNumber')
	const row = table.insertRow(-1)

	const id = row.insertCell(0)
	id.innerHTML = rowValues.pitcher_id
	const name = row.insertCell(1)
	name.innerHTML = rowValues.pitcher_name
	const FF_n = row.insertCell(2)
	FF_n.innerHTML = rowValues.FF_n
	const SI_n = row.insertCell(3)
	SI_n.innerHTML = rowValues.SI_n
	const FC_n = row.insertCell(4)
	FC_n.innerHTML = rowValues.FC_n
	const CH_n = row.insertCell(5)
	CH_n.innerHTML = rowValues.CH_n
	const FS_n = row.insertCell(6)
	FS_n.innerHTML = rowValues.FS_n
	const FO_n = row.insertCell(7)
	FO_n.innerHTML = rowValues.FO_n
	const SC_n = row.insertCell(8)
	SC_n.innerHTML = rowValues.SC_n
	const CU_n = row.insertCell(9)
	CU_n.innerHTML = rowValues.CU_n
	const KC_n = row.insertCell(10)
	KC_n.innerHTML = rowValues.KC_n
	const CS_n = row.insertCell(11)
	CS_n.innerHTML = rowValues.CS_n
	const SL_n = row.insertCell(12)
	SL_n.innerHTML = rowValues.SL_n
	const ST_n = row.insertCell(13)
	ST_n.innerHTML = rowValues.ST_n
	const SV_n = row.insertCell(14)
	SV_n.innerHTML = rowValues.SV_n
	const KN_n = row.insertCell(15)
	KN_n.innerHTML = rowValues.KN_n
	const N = row.insertCell(16)
	N.innerHTML = rowValues.N
	const seasonYear = row.insertCell(17)
	seasonYear.innerHTML = rowValues.season

}

function newRowRegressor(rowValues) {
	const table = document.getElementById('dataTableRegressor')
	const row = table.insertRow(-1)

	const pitcherId = row.insertCell(0);
	pitcherId.innerHTML = rowValues.pitcher_id;
	const name = row.insertCell(1);
	name.innerHTML = rowValues.pitcher_name;
	const pitchType = row.insertCell(2);
	pitchType.innerHTML = rowValues.pitch_type;
	const releaseSpeed = row.insertCell(3);
	releaseSpeed.innerHTML = rowValues.release_speed;
	const releasePosX = row.insertCell(4);
	releasePosX.innerHTML = rowValues.release_pos_x;
	const releasePosY = row.insertCell(5);
	releasePosY.innerHTML = rowValues.release_pos_y;
	const releasePosZ = row.insertCell(6);
	releasePosZ.innerHTML = rowValues.release_pos_z;
	const pfxX = row.insertCell(7);
	pfxX.innerHTML = rowValues.pfx_x;
	const pfxZ = row.insertCell(8);
	pfxZ.innerHTML = rowValues.pfx_z;
	const vx0 = row.insertCell(9);
	vx0.innerHTML = rowValues.vx0;
	const vy0 = row.insertCell(10);
	vy0.innerHTML = rowValues.vy0;
	const vz0 = row.insertCell(11);
	vz0.innerHTML = rowValues.vz0;
	const ax = row.insertCell(12);
	ax.innerHTML = rowValues.ax;
	const ay = row.insertCell(13);
	ay.innerHTML = rowValues.ay;
	const az = row.insertCell(14);
	az.innerHTML = rowValues.az;
	const releaseSpinRate = row.insertCell(15);
	releaseSpinRate.innerHTML = rowValues.release_spin_rate;
	const spinAxis = row.insertCell(16);
	spinAxis.innerHTML = rowValues.spin_axis;
	const releaseExtension = row.insertCell(17);
	releaseExtension.innerHTML = rowValues.release_extension;
	const vaa = row.insertCell(18);
	vaa.innerHTML = rowValues.vaa;
	const haa = row.insertCell(19);
	haa.innerHTML = rowValues.haa;
	const abs_axis_differential = row.insertCell(20);
	abs_axis_differential.innerHTML = rowValues.abs_axis_differential;
	const coors = row.insertCell(21);
	coors.innerHTML = rowValues.coors;
	const stuffPlus = row.insertCell(22);
	stuffPlus.innerHTML = rowValues.stuff_plus;
	const season = row.insertCell(23);
	season.innerHTML = rowValues.season;

}

window.EntryPoint = EntryPoint




