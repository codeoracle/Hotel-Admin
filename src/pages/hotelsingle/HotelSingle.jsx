import './hotelsingle.scss'
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Single = () => {

  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/96444/pexels-photo-96444.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="itemImg" />
              <div className="details">
                <div className="itemTitle">Highlife Hotel</div>
                <div className="detailItem">
                  <span className="itemKey">Room:</span>
                  <span className="itemValue">157</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Status:</span>
                  <span className="itemValue">Available</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Ontario</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">County:</span>
                  <span className="itemValue">Canada</span>
                </div>
              </div>
            </div> 
          </div>
          <div className="right">
            <Chart aspect={4 / 1} title = "Last Spending (Last 6 Months)"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single