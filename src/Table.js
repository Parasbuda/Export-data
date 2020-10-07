import React from 'react'

const Table = ({customers}) => {
    return (
        <table  id="table-to-xls" className="table  table-bordered table-hover">

            <tr className="text-center ">
              <th colspan="6">Meraki techs pvt ltd</th>
              </tr>
              <tr className="text-center">
              <th colspan="6">Bhimsengola Kathmandu</th>
              </tr>
              <tr className="text-center">
              <th colspan="6">2000-4556-123</th>
              </tr>
              <tr className="text-center">
              <th colspan="6">Purchase Sheet (Summary)</th>
              </tr>
              <tr >
              <th className="text-center">Date Range</th>
              <td></td>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              </tr>
              <tr >
              <th>B.S</th>
              <td>2073/3/10 to 2077/1/10</td>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              </tr>
              <tr >
              <th>A.D</th>
              <td>2019/3/10 to 2020/2/10</td>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              </tr>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Zipcode</th>
          </tr>
         
          <tbody >  
        {    
           customers.length>0?(customers.map((customer,index)=>{
             return(
            <tr key = {index} className="table-success">
            <td> {index + 1} </td>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td>{customer.email}</td>
            <td>{customer.address}</td>
            <td>{customer.zipcode}</td>
        </tr>
             )
           })):null
  }
          </tbody>
        </table> 
    )
}

export default Table

