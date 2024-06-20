import ReactDom from 'react-dom/client'
import Bmi from './Bmi'
import Change from './mod'
import Switch from './switch'
import Fetch from './fetch/fetch'
import Counter from './counter'


const cointainer = document.getElementById('root')
const root = ReactDom.createRoot(cointainer)
root.render(<Fetch/>)