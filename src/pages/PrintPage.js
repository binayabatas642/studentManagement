import "../css/printPage.css";
import React from "react";

const PrintPage = () => {
	return (
		<div className="bill">
			<h1>KidZee Kalanki</h1>
			<h4>Rabi Bhawan</h4>
			<h4>5234145, kidzeekalanki@gmail.com</h4>

			<div className="invoice-detail">
				<div>
					<p className="label">Bill Number:</p>
					<p className="data">001</p>
				</div>
				<div>
					<p className="label">Invoice Date:</p>
					<p className="data">11/11/2011</p>
				</div>
				<div>
					<p className="label">For Month:</p>
					<p className="data">November</p>
				</div>
				<div>
					<p className="label">Roll No.</p>
					<p className="data">32</p>
				</div>
				<div>
					<p className="label">Name:</p>
					<p className="data">Binaya Batas</p>
				</div>
				<div>
					<p className="label">Course/Batch:</p>
					<p className="data">UKG</p>
				</div>
				<div>
					<p className="label">School/College PAN:</p>
					<p className="data">009 038 084</p>
				</div>
				<div>
					<p className="label">Account Number:</p>
					<p className="data">1001 0101 0001 01</p>
				</div>
				<div>
					<p className="label">Transaction Date:</p>
					<p className="data">-/-/-</p>
				</div>
			</div>
			<hr />
			<table>
				<tr>
					<th>S.N.</th>
					<th>Fee Descriptions</th>
					<th>Fee</th>
				</tr>
				<tr>
					<td></td>
					<td className="fee-desc">Tuition Fee</td>
					<td className="account-data"> 1000.00</td>
				</tr>
				<tr>
					<td></td>
					<td className="fee-desc">Admission Fee</td>
					<td className="account-data">2000.00</td>
				</tr>
				<tr>
					<td></td>
					<td className="fee-desc">Transportation Fee</td>
					<td className="account-data">100000.21</td>
				</tr>
				<tr>
					<td></td>
					<td className="fee-desc">Late Fee</td>
					<td className="account-data">21212.00</td>
				</tr>
			</table>
		</div>
	);
};

export default PrintPage;
