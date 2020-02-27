import React,{Component} from 'react';
import Editor from './Editor'
import AdminHeader from '.AdminHeader'

class SkeletonKeyForm extends Component{

  state = {
    title: "",
    link: "",
}

  render(){
  return(
    <>
    <div><AdminHeader /></div>
    <div><Editor /> </div>
    </>
  );
 }
}
