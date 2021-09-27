 
import {useState,useRef,useEffect}  from 'react'
import {v4 as uuid} from 'uuid'
import axios from 'axios'
import './App.css';
import PaperList from './PaperList';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button,Modal } from 'react-bootstrap';
import paperList from './PaperList';
const BASE_URL='http://localhost:5000/'
function App() {
 function getPapers(){

  axios({
    method: 'get',
    url: BASE_URL+'getPapers',
   
    
})
.then(function (response) {
    //handle success
    console.log(response.data)
    setPapers(response.data)
})
.catch(function (response) {
  console.log(response)
    //handle error
});
   
  }
  const [papers, setPapers] = useState([])
 const [show, setShow] = useState(false);
  const refSearch=useRef()
  useEffect(()=>{
    getPapers()
    },[])
    
    useEffect(()=>{
    
      
    },[papers])
 
  const refTitle=useRef()
  const refAuther=useRef()
  const refDatePublished=useRef()
  const refReferenceCount=useRef()
  const refNumbersOfCitations=useRef()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  function handleSearch(e){
    
    let searchText=refSearch.current.value
  if(searchText==='')return
//call search

  
  }


    function handleSave(e){
      debugger;
      let title=refTitle.current.value
        let auther=refAuther.current.value
  let datePublished=refDatePublished.current.value
  let referenceCount=refReferenceCount.current.value
   let numbersOfCitations=refNumbersOfCitations.current.value
   var bodyFormData = new FormData();
   bodyFormData.append('title', title);
   bodyFormData.append('auther', auther);
    bodyFormData.append('datePublished', datePublished);
   bodyFormData.append('referenceCount', referenceCount);
    bodyFormData.append('numbersOfCitation', numbersOfCitations);
    axios({
    method: "post",
    url: BASE_URL+'addPaper',
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    
  .then(function (response) {
    getPapers()

  })
  .catch(function (error) {
    console.log(error);
  });
 
     
   
 
  refTitle.current.value=null
  refAuther.current.value=null
  refDatePublished.current.value=null
  refReferenceCount.current.value=null
  refNumbersOfCitations.current.value=null
  handleClose()
}
  return (
    <div className="App">
      <header className="App-header">
       <div className="container">  
       <div className="card shadow-sm">
       <div className="card-body">
       <div className="card-header">
       <h3 className="text-success">  Papare Manager</h3>
     </div>
       <div className="row">
              <input type="text" className=" col-lg-10" ref={refSearch}/>
              <Button className="btn btn-success col-lg-2" onClick={handleSearch}> Search</Button>
         </div>
         <PaperList papers={papers}/>
         </div>
           
     <hr/>
          <Button   onClick={handleShow}>Add New Paper </Button>
     
      </div>
      </div>
      </header>


      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Paper</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" required   ref={refTitle}  className="form-control" placeholder="Enter Title"/> 
          <input type="text" required  ref={refAuther}  className="form-control" placeholder="Enter Auther"/> 
          <input type="date"   required ref={refDatePublished}  className="form-control" placeholder="Enter Publish Date"/> 
          <input type="number"   required ref={refReferenceCount}  className="form-control" placeholder="Enter Reference Count"/> 
          <input type="number"   required ref={refNumbersOfCitations}  className="form-control" placeholder="Enter Number of Citations"/> 
          
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
