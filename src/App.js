import './App.css';
import Card from './Card'


function App() {
  const salesData = [
    {
      name: 'Jack Mars',
      handle: '@jack', 
      initials: 'JM',
      trend: '3%',
      increasing: true,
      numOfSales: 68
    },
    {
      name: 'Irfan Veci',
      handle: '@veci', 
      initials: 'IV',
      trend: '63%',
      increasing: false,
      numOfSales: 12
    },
    {
      name: 'Ling Lee',
      handle: '@llee', 
      initials: 'LL',
      trend: '11%',
      increasing: true,
      numOfSales: 29
    },
    {
      name: 'Juan Bene',
      handle: '@juanb', 
      initials: 'JB',
      trend: '5%',
      increasing: true,
      numOfSales: 45
    },
    {
      name: 'Leona Curtis',
      handle: '@lecu', 
      initials: 'LC',
      trend: '4%',
      increasing: false,
      numOfSales: 50
    },
  ]
  return (
  <div className='body'>
    <div className='header'>
      <h1 className='currentSales'>Current Sales <span>by team member</span></h1>
    </div>
      <div className='navBar' id='selected'>TEAM MEMBERS</div> 
      <div className='navBar'>PRODUCTS</div>
      <div className='navBar'>INDUSTRY</div>
{salesData.map(item => {
  return (
    <div className='allCards'>
    <div className='cards'>
        <Card name={item.name}
        handle={item.handle}
        initials={item.initials}
        trend={item.trend}
        increasing={item.increasing}
        numOfSales= {item.numOfSales}/>
    </div>
    </div>
  )
})}
</div>
  )
}
export default App;
  