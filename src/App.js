// import React, { Component } from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
// import ReactHTMLTableToExcel from "react-html-table-to-excel";
// import Table from "./Table";

// class App extends Component {
//   state = {
//     customers: [],
//   };
//   customers = () => {
//     let custs = [];
//     for (let i = 0; i <= 25; i++) {
//       custs.push({
//         firstName: `first${i}`,
//         lastName: `last${i}`,
//         email: `abc${i}@gmail.com`,
//         address: `000${i} street city, ST`,
//         zipcode: `0000${i}`,
//       });
//     }
//     return custs;
//   };
//   componentDidMount(){
//     this.setState({
//       customers:this.customers()
//     })
//   }
//   render() {
//     const customers=this.state.customers
//     return (
//       <div>
//         <ReactHTMLTableToExcel
//           id="test-table-xls-button"
//           component={Table}
//           className="download-table-xls-button mb-5"
//           table="table-to-xls"
//           filename="tablexls"
//           sheet="tablexls"
//           buttonText="Export"
//         />
//         <Table customers={this.state.customers}/>

//       </div>
//     );
//   }
// }

// export default App;
import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import Table from "./Table";

class App extends React.Component {
  state = {
    customers: [],
  };
  customers = () => {
    let custs = [];
    for (let i = 0; i <= 25; i++) {
      custs.push({
        firstName: `first${i}`,
        lastName: `last${i}`,
        email: `abc${i}@gmail.com`,
        address: `000${i} street city, ST`,
        zipcode: `0000${i}`,
      });
    }
    return custs;
  };
  componentDidMount() {
    this.setState({
      customers: this.customers(),
    });
  }

  exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Meraki Tech Pvt Ltd";
    const address = "Bhimsengola Kathmandu";
    const report = "customer report";
    const headers = [
      ["S.N", "FirstName", "LastName", "Email", "Address", "Zipcode"],
    ];

    const data = this.state.customers.map((customer, i) => [
      i + 1,
      customer.firstName,
      customer.lastName,
      customer.email,
      customer.address,
      customer.zipcode,
    ]);

    let content = {
      startY: 100,
      head: headers,
      body: data,
    };

    doc.text(title, 230, 42);
    doc.text(address, 215, 57);
    doc.text(report, 240, 72);
    doc.autoTable(content);
    doc.save("report.pdf");
  };

  render() {
    return (
      <div>
        <button className="btn btn-secondary" onClick={() => this.exportPDF()}>Generate PDF</button>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          component={Table}
          className="download-table-xls-button ml-5 btn btn-primary"
          table="table-to-xls"
          filename="tablexls"
          sheet="tablexls"
          buttonText="Generate Excel"
        />
        <Table customers={this.state.customers}/>
      </div>
    );
  }
}

export default App;
