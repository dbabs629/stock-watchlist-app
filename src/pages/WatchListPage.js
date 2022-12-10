import WatchList from '../components/WatchList'
import AddStock from '../components/AddStock'

const WatchListPage = () => {
  return (
    <div>
      <h1>Your WatchList</h1>
      <p>Enter a stock and an exchange then press the search button.</p>
      <AddStock />
      <WatchList />
    </div>
  )
}
export default WatchListPage
