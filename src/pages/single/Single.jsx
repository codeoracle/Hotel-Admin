import './single.scss'
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
              <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="itemImg" />
              <div className="details">
                <div className="itemTitle">Mary Jane</div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">maryjane@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+234 902 3893 813</span>
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