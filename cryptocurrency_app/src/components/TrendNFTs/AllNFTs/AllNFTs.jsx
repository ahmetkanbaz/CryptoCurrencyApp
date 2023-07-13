import { useSelector } from "react-redux"
import SingleNFT from "../SingleNFT/SingleNFT"
const AllNFTs = () => {
  const trendCoins = useSelector((state) => state.trendCoins.trendCoins)
  return (
    <div>
      <h4>Trend NFTs</h4>
      {
        trendCoins.length != 0 && trendCoins.nfts.map((nft, i) => <SingleNFT key={i} nft={nft} />)
      }
    </div>
  )
}

export default AllNFTs