
import './bootstrap-4.5.3-dist/css/bootstrap.min.css';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import React, { useEffect, useState } from 'react';

const Users = [
  {id: 1, name: 'Dimaw', password: 'dimaw'},
  {id: 2, name: 'Maga', password: 'maga'}
];



  






class MainClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name:""};
    this.state={password:""};
    this.state={check:true}
    this.state={i:0}
    this.handleChange = this.handleChange.bind(this);
    this.handleChanged = this.handleChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logout = this.logout.bind(this);
  }
  logout(event) {
    if(!this.state.check) {
    this.setState({check:true}); }
  }
  toCard(event) {
    alert("This good added in your basket")
  }
  handleChange(event) {
    this.setState({name: event.target.value});
  }
  handleChanged(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    let check=true;
     for(let i=0;i<3;i++) {
       if(Users[i].name==this.state.name && Users[i].password==this.state.password) {
        this.setState({check: false}) ;
        check = false;
        document.cookie = 'user' + '=' +encodeURIComponent(Users[i].name)
        alert("Your sign in!")  
      }
      if(check) {
        alert("Your email or password incorrect try again!")
       }
    }
    
    
    event.preventDefault();
  }

render() {
    return <div className="container" style={{marginTop:'150px',marginLeft:'450px',maxWidth:'400px'}}>
        <form onSubmit={this.handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="text"  onChange={this.handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" onChange={this.handleChanged} class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit"   class="btn btn-primary">Login</button>
</form>
    </div>
}}



  const initialList = [];
  initialList.push({name:'Eloewfefen Merfeutjturusk',description:'Elon very clever',img:'https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg',category:'Business'});
  initialList.push({name:'Eloewfefen Merfeutjturusk',description:'MAsk very clever',img:'https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg',category:'Business'});
  initialList.push({name:'Eloewfefen Merfeutjturusk',description:'TAsk very clever',img:'https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg',category:'Sport'});
  initialList.push({name:'Eloewfefen Merfeutjturusk',description:'Jask very clever',img:'https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg',category:'Sport'});
  initialList.push({name:'Eloewfefen Merfeutjturusk',description:'Lask very clever',img:'https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg',category:'Sport'});
  initialList.push({name:'Eloewfefen Merfeutjturusk',description:'Pask very clever',img:'https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg',category:'Sport'});
  initialList.push({name:'Eloewfefen Merfeutjturusk',description:'Rask very clever',img:'https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg',category:'Sport'});
  initialList.push({name:'Eloewfefen Merfeutjturusk',description:'Yask very clever',img:'https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg',category:'Sport'});
  initialList.push({name:'Eloewfefen Merfeutjturusk',description:'Fsk very clever',img:'https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg',category:'Sport'});
  initialList.push({name:'Eloewfefen Merfeutjturusk',description:'Shask very clever',img:'https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg',category:'Sport'});
  initialList.push({name:'Eloewfefen Merfeutjturusk',description:'KAska very clever',img:'https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg',category:'Sport'});
  const blogs = [];
  blogs.push(  {name:'Alissa Medenova',description:'My name is Alissa,I am reporter,I am twenty seven,I work in Almaty and  I love travelling',img:'rep.jpg'});
  blogs.push(  {name:'Alissa Medenova',description:'My name is Alissa,I am reporter,I am twenty seven,I work in Almaty and  I love travelling',img:'rep.jpg'});
  blogs.push(  {name:'Alissa Medenova',description:'My name is Alissa,I am reporter,I am twenty seven,I work in Almaty and  I love travelling',img:'rep.jpg'});
  

function MainFunction() {

  
  const [list, setList] = useState(initialList);
  const [name,setName] = useState();
  const [nameNews,setNameNews] = useState();
  const [url,setNameUrl] = useState();
  const [cat,setNameCat] = useState();

  const [listB, setListB] = useState(blogs);
  const [nameB,setNameB] = useState();
  const [nameNewsB,setNameNewsB] = useState();
  const [urlB,setNameUrlB] = useState();
 
 function Listing(props) {
   let leng = props.len;
   let match = useRouteMatch();
   let number=leng/3;
   let mps = [];
   let u=0;
   for(let i=0;i<number;i++) {
     mps[u++] = i+1;
   }
  return ( <div>
    {mps.map(number=>(
      <Router>
        <Link   className="ml-3" style={{border:'2px solid black'}} to={`${match.url}/${number}`}>{number}
        </Link>
        <Switch>
          <Route path={`${match.path}/:pageId`}>
            <List lens={props.len}/>
          </Route>
        </Switch>

      </Router>
    ))}
    </div>
   );

 }

 function Show(props) {
   if(document.getElementById(props.number)) {
   document.getElementById(props.id).style.display='block';}
 }

 function List(props) {
   let {pageId} = useParams();
   let arr = [];
   let start = pageId*3-3;
   let end = start+3;
   if(props.lens<end) {
     end = props.lens;
   }
   for(let i=start;i<end;i++) {
     arr.push(list[i]);
   }
   let u=props.lens;
   for(let i=1;i<=u;i++) {
     if(i!=pageId) {
       if(document.getElementById(i)) {
       document.getElementById(i).style.display='none';
          }     }
   }
   if(document.getElementById(pageId)) {
   document.getElementById(pageId).style.display='block';
   }
   return (<div id={pageId} >
    {arr.map(numbers=>(
      <div  class="card mb-3" style={{maxWidth: '700px',maxHeight:'300px'}}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={numbers.img} style={{width:'150px',marginTop:'10px',marginLeft:'10px'}} alt="..."/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title" style={{marginLeft:'-50px'}}>{numbers.name}</h5>
            <p class="card-text" style={{marginLeft:'-50px',marginTop:'-10px'}}>{numbers.description}</p>
            <p class="card-text" style={{marginTop:'-20px',marginLeft:'80px'}}><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    ))}
    </div>
   );
 }


 const changeName = event=>{
    setName(event.target.value);
  }
  const changeDes = event=>{
    setNameNews(event.target.value);
  }
  const changeUrl = event=>{
    setNameUrl(event.target.value);
  }
  const changeCat = event=>{
    setNameCat(event.target.value);
  }

  const changeBName = event=>{
    setNameB(event.target.value);
  }
  const changeBDes = event=>{
    setNameNewsB(event.target.value);
  }
  const changeBUrl = event=>{
    setNameUrlB(event.target.value);
  }
 
  function handleAdd() {
    const newList = list.concat({ name:name,description:nameNews,img:url,category:cat });
    
    setList(newList);
    alert(newList[newList.length-1].category);
  }

  function handleBAdd() {
    const newList = listB.concat({ name:nameB,description:nameNewsB,img:urlB});
    
    setListB(newList);
    alert("Your blogs added");
  }
  
  return (
  <div>
    <Router>
    <div className="row" style={{marginTop:'0px',marginLeft:'30px'}}>
      
    <Link className="text-white" to="/all">All News</Link>
  <Link className="text-white ml-2" to="/sport">Sport</Link>
  <Link className="text-white ml-2" to="/politics">Politics</Link>
  <Link className="text-white ml-2" to="/tech">Technology</Link>
  <Link className="text-white ml-2" to="/business">Business</Link>
  {getCookie('user')?
  <Link className="text-white ml-2 text-info"   to="/add">ADD++</Link>:""}
  </div>
  <div className="bg-white">
      
<div className="container" style={{marginTop:'70px'}}>
<div id="carouselExampleCaptions" class="carousel slide mt-3" data-bs-ride="carousel">
  <ol class="carousel-indicators">
    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="cor.jpg" class="d-block w-100" alt="..."/>
      <div  class="carousel-caption d-none d-md-block">
        <h5 className="bg-dark text-white">ЧТО НУЖНО ЗНАТЬ О COVID-19</h5>
        <p className="bg-dark text-white">Коронавирусная инфекция COVID-19 воздействует на различные группы людей в разной степени</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src="cor.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="bg-dark text-white">ЧТО НУЖНО ЗНАТЬ О COVID-19</h5>
        <p className="bg-dark text-white">Коронавирусная инфекция COVID-19 воздействует на различные группы людей в разной степени</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src="cor.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="bg-dark text-white">ЧТО НУЖНО ЗНАТЬ О COVID-19</h5>
        <p className="bg-dark text-white">Коронавирусная инфекция COVID-19 воздействует на различные группы людей в разной степени</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
<div className="row"> 
<Switch>
  <Route path="/add">
    <div className="col-7">
    <h5 className="mt-3">Add news</h5> 
  <div class="mb-3">
  <label  class="form-label">NEWS NAME:</label>
    <input type="text" onChange={changeName} value={name}   class="form-control"  />
    <label  class="form-label">NEWS DESCRIPTION:</label>
    <input type="text" onChange={changeDes} value={nameNews}  name="nameNews" style={{height:'100px'}} class="form-control" />
    <label  class="form-label">NEWS URL:</label>
    <input type="text" onChange={changeUrl} value={url}  name="nameUrl"  class="form-control" />
    <label  class="form-label">NEWS CATEGORY:</label>
    <select type="text" onChange={changeCat} value={cat}  name="nameCat"  class="form-control" >
      <option>Choose category</option>
      <option>Sport</option>
      <option>Business</option>
      <option>Politics</option>
      <option>Technology</option>
      </select>
  </div> 
   <button type="button" onClick={handleAdd}   class="btn btn-success">SAVE</button>
    </div>
    <div className="col-5">
     <h5 className="mt-3">Add Blogs</h5> 
     <div class="mb-3">
  <label  class="form-label">BLOGS NAME:</label>
    <input type="text" onChange={changeBName} value={nameB}   class="form-control"  />
    <label  class="form-label">NEWS DESCRIPTION:</label>
    <input type="text" onChange={changeBDes} value={nameNewsB}  name="nameNews" style={{height:'100px'}} class="form-control" />
    <label  class="form-label">NEWS URL:</label>
    <input type="text" onChange={changeBUrl} value={urlB}  name="nameUrl"  class="form-control" />
  </div> 
  <button type="button" onClick={handleBAdd}   class="btn btn-success">SAVE</button>
    </div>
    </Route>
    <Route path="/all">
    <div className="col-7">
    <h5 className="mt-3">All news</h5> 
  <div>
    <Listing len = {list.length} />
  </div>
  
  </div>
  <div className="col-5">
     <h5 className="mt-3">Blogs</h5> 
     {listB.map(numbers=>(
      <div  class="card mb-3 bg-info" style={{maxWidth: '500px',maxHeight:'200px'}}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={numbers.img} style={{width:'100px',marginTop:'10px',marginLeft:'10px'}} alt="..."/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title" style={{marginLeft:'-50px'}}>{numbers.name}</h5>
            <p class="card-text" style={{marginLeft:'-50px',marginTop:'-10px'}}>{numbers.description}</p>
            <p class="card-text" style={{marginTop:'-20px',marginLeft:'80px'}}><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    ))}
    </div>
    </Route>
    <Route path="/sport">
    <div className="col-7">
    <h5 className="mt-3">Sport news</h5> 
  <div>
    {list.map(numbers=>(numbers.category=='Sport'?
      <div  class="card mb-3" style={{maxWidth: '700px',maxHeight:'300px'}}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={numbers.img} style={{width:'150px',marginTop:'10px',marginLeft:'10px'}} alt="..."/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title" style={{marginLeft:'-50px'}}>{numbers.name}</h5>
            <p class="card-text" style={{marginLeft:'-50px',marginTop:'-10px'}}>{numbers.description}</p>
            <p class="card-text" style={{marginTop:'-20px',marginLeft:'80px'}}><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    :""))}
    
  </div>
  </div>
  <div className="col-5">
     <h5 className="mt-3">Blogs</h5> 
     {listB.map(numbers=>(
      <div  class="card mb-3 bg-info" style={{maxWidth: '500px',maxHeight:'200px'}}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={numbers.img} style={{width:'100px',marginTop:'10px',marginLeft:'10px'}} alt="..."/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title" style={{marginLeft:'-50px'}}>{numbers.name}</h5>
            <p class="card-text" style={{marginLeft:'-50px',marginTop:'-10px'}}>{numbers.description}</p>
            <p class="card-text" style={{marginTop:'-20px',marginLeft:'80px'}}><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    ))}
    </div>
    </Route>
    <Route path="/tech">
    <div className="col-7">
    <h5 className="mt-3">Technology news</h5> 
  <div>
  {list.map(numbers=>(numbers.category=='Technology'?
      <div  class="card mb-3" style={{maxWidth: '700px',maxHeight:'300px'}}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={numbers.img} style={{width:'150px',marginTop:'10px',marginLeft:'10px'}} alt="..."/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title" style={{marginLeft:'-50px'}}>{numbers.name}</h5>
            <p class="card-text" style={{marginLeft:'-50px',marginTop:'-10px'}}>{numbers.description}</p>
            <p class="card-text" style={{marginTop:'-20px',marginLeft:'80px'}}><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    :""))}
    
  </div>
  </div>
  <div className="col-5">
     <h5 className="mt-3">Blogs</h5> 
     {listB.map(numbers=>(
      <div  class="card mb-3 bg-info" style={{maxWidth: '500px',maxHeight:'200px'}}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={numbers.img} style={{width:'100px',marginTop:'10px',marginLeft:'10px'}} alt="..."/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title" style={{marginLeft:'-50px'}}>{numbers.name}</h5>
            <p class="card-text" style={{marginLeft:'-50px',marginTop:'-10px'}}>{numbers.description}</p>
            <p class="card-text" style={{marginTop:'-20px',marginLeft:'80px'}}><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    ))}
    </div>
    </Route>
    <Route path="/politics">
    <div className="col-7">
    <h5 className="mt-3">Politic news</h5> 
  <div>
  {list.map(numbers=>(numbers.category=='Politics'?
      <div  class="card mb-3" style={{maxWidth: '700px',maxHeight:'300px'}}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={numbers.img} style={{width:'150px',marginTop:'10px',marginLeft:'10px'}} alt="..."/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title" style={{marginLeft:'-50px'}}>{numbers.name}</h5>
            <p class="card-text" style={{marginLeft:'-50px',marginTop:'-10px'}}>{numbers.description}</p>
            <p class="card-text" style={{marginTop:'-20px',marginLeft:'80px'}}><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    :""))}
    
  </div>
  </div>
  <div className="col-5">
     <h5 className="mt-3">Blogs</h5> 
     {listB.map(numbers=>(
      <div  class="card mb-3 bg-info" style={{maxWidth: '500px',maxHeight:'200px'}}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={numbers.img} style={{width:'100px',marginTop:'10px',marginLeft:'10px'}} alt="..."/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title" style={{marginLeft:'-50px'}}>{numbers.name}</h5>
            <p class="card-text" style={{marginLeft:'-50px',marginTop:'-10px'}}>{numbers.description}</p>
            <p class="card-text" style={{marginTop:'-20px',marginLeft:'80px'}}><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    ))}
    </div>
    </Route>
    <Route path="/business">
    <div className="col-7">
    <h5 className="mt-3">Business news</h5> 
  <div>
  {list.map(numbers=>(numbers.category=='Business'?
      <div  class="card mb-3" style={{maxWidth: '700px',maxHeight:'300px'}}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={numbers.img} style={{width:'150px',marginTop:'10px',marginLeft:'10px'}} alt="..."/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title" style={{marginLeft:'-50px'}}>{numbers.name}</h5>
            <p class="card-text" style={{marginLeft:'-50px',marginTop:'-10px'}}>{numbers.description}</p>
            <p class="card-text" style={{marginTop:'-20px',marginLeft:'80px'}}><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    :""))}
    
  </div>
  </div>
  <div className="col-5">
     <h5 className="mt-3">Blogs</h5> 
     {listB.map(numbers=>(
      <div  class="card mb-3 bg-info" style={{maxWidth: '500px',maxHeight:'200px'}}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={numbers.img} style={{width:'100px',marginTop:'10px',marginLeft:'10px'}} alt="..."/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title" style={{marginLeft:'-50px'}}>{numbers.name}</h5>
            <p class="card-text" style={{marginLeft:'-50px',marginTop:'-10px'}}>{numbers.description}</p>
            <p class="card-text" style={{marginTop:'-20px',marginLeft:'80px'}}><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    ))}
    </div>
    </Route>
    </Switch>
    
</div>
</div>
</div></Router></div>
  );

}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}



function App() {

  return (
    
    <div className="row bg-dark p-4 wight-100" style={{maxHeight:'100px'}}>
<Router>
<div><h3 className="text-white"><Link to="/" className="text-white">HABAR.COM</Link></h3></div> 

  <div className="ml-3 mt-2">
    
 
  <Link  style={{float:'right',color:'white',marginTop:'-10px',fontSize:'22px'}} to="/sign">{getCookie("user")!=null ? getCookie("user") : "Sign in"}</Link>

  <Switch>
  <Route path="/sign">
        <MainClass/>
    </Route>
    <Route path="/">
        <MainFunction/>
    </Route>
  </Switch>
  
 
  

</div>
</Router></div>

    
  );
}

export default App;
