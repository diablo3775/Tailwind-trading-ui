import { 
  eth5,eth6,bitcoinbg,eth,pp,dollar1,dollar2,price,tvl,bitcoinsmall,bitcoinsmallbg,solana4,solana5,solana6,solanabigbg,
  binancebig1,binancebig2,binancebigbg,binancedollar,binancegreen,binancetxt,shiba1,shiba2,shiba3,shiba4,shiba5,shiba6,
  solanared, solanatxt, solanadollar,ethtxt,ethdollar,ethred,ethbig1,ethbig2,ethbig3,ethbig4,ethbig5,ethbig6,ethbigbg,
  binance2,binance1,binance,solana1,solana2,solana3,dollargreen,bitcoinlogo,bitcointxt,solana,eth1,eth2,eth3,eth4,
  shiba7,shibabg,shibadollar,shibared,shibatxt
} from 'constants/index'
import './Cards.css'

const Cards = () => {
  return (
    <div className='pt-52 pr-0 pb-52 pl-200 grid fixed'>
      <div before="" after="" className='h-tr w-tr bg-lg flex justify-center overflow-hidden backdrop-blur-0 rounded-xl before:content-[attr(before)] before:absolute before:top-0 before:chc-l before:w-9 before:h-9 before:bs before:chcb after:content-[attr(after)] after:absolute after:top-0 after:chc-la after:bs-a after:w-9 after:h-9 after:chcb-a'>
        <div className='h-chc w-chc relative bg-chc rounded-br-full rounded-bl-full'></div>
        <div className='absolute left-28 top-20'><img src={bitcointxt} /></div>
        <div className='flex justify-center items-center absolute bg-chc top-28 w-60 h-10 rounded-2xl'><img className='pr-4 pl-7' src={dollar1} /><img src={dollargreen} /></div>
        <div className='absolute price-top'><img src={price} /></div>
        <div className='flex justify-center items-center absolute bdr-top bg-chc h-10 w-60 rounded-2xl'><img className='dollar-txt-two' src={dollar2} /></div>
        <div className='absolute tvl-top'><img src={tvl} /></div>
        <div className='flex justify-center items-center absolute bdr-top bg-chc bdr-last-top h-10 w-32 rounded-2xl'>
          <img className='solana' src={solana} />
          <img className='solana1' src={solana1} />
          <img className='solana2' src={solana2} />
          <img className='solana3' src={solana3} />
          <img className='eth' src={eth} />
          <img className='eth1' src={eth1} />
          <img className='eth2' src={eth2} />
          <img className='eth3' src={eth3} />
          <img className='eth4' src={eth4} />
          <img className='eth5' src={eth5} />
          <img className='eth6' src={eth6} />
          <img className='binance2' src={binance2} />
          <img className='binance' src={binance} />
          <img className='binance1' src={binance1} />
        </div>
        <div className='pp'><img src={pp} /></div>
      </div>
      <div className="mid-circle">
        <div className='mid-bitcoin'>
          <img className='mid-bitcoin-bg' src={bitcoinbg} />
          <img className='mid-bitcoin-logo' src={bitcoinlogo} />
        </div>
      </div>

      {/* 2nd card */}
      <div className='h-tr w-tr bg-lg flex justify-center overflow-hidden backdrop-blur-0 rounded-xl'>
        <div className='card-half-circle'></div>
        <div className='btc-txt'><img src={solanatxt} /></div>
        <div className='btc-border'><img className='dollar-txt' src={solanadollar} /><img className='dollargreen' src={solanared} /></div>
        <div className='price'><img src={price} /></div>
        <div className='btc-border-two'><img className='dollar-txt-two' src={dollar2} /></div>
        <div className='tvl'><img src={tvl} /></div>
        <div className='btc-border-three'>
          <img className='solana' src={bitcoinsmallbg} />
          <img className='bitcoinsmall' src={bitcoinsmall} />
          <img className='eth' src={eth} />
          <img className='eth1' src={eth1} />
          <img className='eth2' src={eth2} />
          <img className='eth3' src={eth3} />
          <img className='eth4' src={eth4} />
          <img className='eth5' src={eth5} />
          <img className='eth6' src={eth6} />
          <img className='binance2' src={binance2} />
          <img className='binance' src={binance} />
          <img className='binance1' src={binance1} />
        </div>
        <div className='pp'><img src={pp} /></div>
      </div>
      <div className="mid-circle2">
        <div className='mid-solana'>
          <img className='solanabigbg' src={solanabigbg} />
          <img className='solana4' src={solana4} />
          <img className='solana5' src={solana5} />
          <img className='solana6' src={solana6} />
        </div>
      </div>
      {/* 2nd card */}

      {/* 3rd card */}
      <div className='h-tr w-tr bg-lg flex justify-center overflow-hidden backdrop-blur-0 rounded-xl'>
        <div className='card-half-circle'></div>
        <div className='btc-txt'><img src={ethtxt} /></div>
        <div className='btc-border'><img className='dollar-txt' src={ethdollar} /><img className='dollargreen' src={ethred} /></div>
        <div className='price'><img src={price} /></div>
        <div className='btc-border-two'><img className='dollar-txt-two' src={dollar2} /></div>
        <div className='tvl'><img src={tvl} /></div>
        <div className='btc-border-three'>
          <img className='solana' src={solana} />
          <img className='solana1' src={solana1} />
          <img className='solana2' src={solana2} />
          <img className='solana3' src={solana3} />
          <img className='bitcoinsmallbg' src={bitcoinsmallbg} />
          <img className='bitcoinsmall3' src={bitcoinsmall} />
          <img className='binance2' src={binance2} />
          <img className='binance' src={binance} />
          <img className='binance1' src={binance1} />
        </div>
        <div className='pp'><img src={pp} /></div>
      </div>
      <div className="mid-circle3">
        <div className='mid-eth'>
          <img className='ethbigbg' src={ethbigbg} />
          <img className='ethbig1' src={ethbig1} />
          <img className='ethbig2' src={ethbig2} />
          <img className='ethbig3' src={ethbig3} />
          <img className='ethbig4' src={ethbig4} />
          <img className='ethbig5' src={ethbig5} />
          <img className='ethbig6' src={ethbig6} />
        </div>
      </div>
      {/* 3rd card */}

      {/* 4th card */}
      <div className='h-tr w-tr bg-lg flex justify-center overflow-hidden backdrop-blur-0 rounded-xl'>
        <div className='card-half-circle'></div>
        <div className='btc-txt'><img src={binancetxt} /></div>
        <div className='btc-border'><img className='dollar-txt' src={binancedollar} /><img className='dollargreen' src={binancegreen} /></div>
        <div className='price'><img src={price} /></div>
        <div className='btc-border-two'><img className='dollar-txt-two' src={dollar2} /></div>
        <div className='tvl'><img src={tvl} /></div>
        <div className='btc-border-three'>
          <img className='solana' src={solana} />
          <img className='solana1' src={solana1} />
          <img className='solana2' src={solana2} />
          <img className='solana3' src={solana3} />
          <img className='eth' src={eth} />
          <img className='eth1' src={eth1} />
          <img className='eth2' src={eth2} />
          <img className='eth3' src={eth3} />
          <img className='eth4' src={eth4} />
          <img className='eth5' src={eth5} />
          <img className='eth6' src={eth6} />
          <img className='binance2' src={binance2} />
          <img className='binance' src={binance} />
          <img className='binance1' src={binance1} />
        </div>
        <div className='pp'><img src={pp} /></div>
      </div>
      <div className="mid-circle4">
        <div className='mid-binance'>
          <img className='binancebigbg' src={binancebigbg} />
          <img className='binancebig1' src={binancebig1} />
          <img className='binancebig2' src={binancebig2} />
        </div>
      </div>
      {/* 4th card */}
      
      {/* 5th card */}
      <div className='h-tr w-tr bg-lg flex justify-center overflow-hidden backdrop-blur-0 rounded-xl'>
        <div className='card-half-circle'></div>
        <div className='btc-txt'><img src={shibatxt} /></div>
        <div className='btc-border'><img className='dollar-txt' src={shibadollar} /><img className='dollargreen' src={shibared} /></div>
        <div className='price'><img src={price} /></div>
        <div className='btc-border-two'><img className='dollar-txt-two' src={dollar2} /></div>
        <div className='tvl'><img src={tvl} /></div>
        <div className='btc-border-three'>
          <img className='solana' src={solana} />
          <img className='solana1' src={solana1} />
          <img className='solana2' src={solana2} />
          <img className='solana3' src={solana3} />
          <img className='eth' src={eth} />
          <img className='eth1' src={eth1} />
          <img className='eth2' src={eth2} />
          <img className='eth3' src={eth3} />
          <img className='eth4' src={eth4} />
          <img className='eth5' src={eth5} />
          <img className='eth6' src={eth6} />
          <img className='binance2' src={binance2} />
          <img className='binance' src={binance} />
          <img className='binance1' src={binance1} />
        </div>
        <div className='pp'><img src={pp} /></div>
      </div>
      <div className="mid-circle5">
        <div className='mid-shiba'>
          <img className='shibabg' src={shibabg} />
          <img className='shiba1' src={shiba1} />
          <img className='shiba2' src={shiba2} />
          <img className='shiba3' src={shiba3} />
          <img className='shiba4' src={shiba4} />
          <img className='shiba5' src={shiba5} />
          <img className='shiba6' src={shiba6} />
          <img className='shiba7' src={shiba7} />
        </div>
      </div>
      {/* 5th card */}
    </div>
  )
}

export default Cards
