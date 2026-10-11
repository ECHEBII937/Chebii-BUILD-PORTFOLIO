import {Routes,Route} from 'react-router-dom';
import Layout from './components/Layout';import Home from './pages/Home';import About from './pages/About';import YouTube from './pages/YouTube';
import Contact from './pages/Contact';import Section from './pages/Section';import EntryPage from './pages/EntryPage';
export default function App(){return(<Routes><Route element={<Layout/>}>
<Route index element={<Home/>}/><Route path="about" element={<About/>}/><Route path="youtube" element={<YouTube/>}/><Route path="contact" element={<Contact/>}/>
<Route path=":section" element={<Section/>}/><Route path=":section/:slug" element={<EntryPage/>}/></Route></Routes>);}
