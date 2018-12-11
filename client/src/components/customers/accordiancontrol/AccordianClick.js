import React from "react";
import ReactDOM from 'react-dom';
import {SmoothScroll} from './smoothscroll';

export let onClick = (event) => {
  //Add and Remove Active Class On Accordian Behalf of Event target
    if(event.target.parentNode.parentNode.classList.contains('active')){
      event.target.parentNode.parentNode.classList.remove("active");
    }
    else{
      document.querySelectorAll('#'+ event.target.parentNode.parentNode.parentNode.parentNode.id + ' .panel-heading a').forEach(function(ele, idx) {
        ele.parentNode.parentNode.classList.remove("active");
        if(ele === event.target){
          if(!ele.parentNode.parentNode.classList.contains('active')){
            setTimeout(() => {
              SmoothScroll.scrollTo(null, ele.parentNode.parentNode.nextSibling.id);
            }, 500);
          }
        }
      });
      event.target.parentNode.parentNode.classList.add("active");
    }

    //Add and remove Class On Active Sidebar link Behalf of id
    var select_id = event.target.getAttribute("href");
    document.querySelectorAll('#sidebar-nav-menu .list-group-item').forEach(function(ele, idx) {
      var prevattr = ele.getAttribute('href');
      if(prevattr.indexOf(select_id.slice(1)) !== -1){
        ele.classList.add("active");
      }
      else{
        ele.classList.remove("active");
      }
    });
  };

export let handelClick = (event) => {
    //Add and remove Class On Active Sidebar link
    if(event.target.classList.contains('active')){
      event.target.classList.remove("active");
    }
    else{
      document.querySelectorAll('#sidebar-nav-menu .list-group-item').forEach(function(ele, idx) {
        ele.classList.remove("active");
      });
      event.target.classList.add("active");
    }

    //Add and Remove Active Class On Accordian Behalf of id
    var select_id = event.target.getAttribute("href");
    var dataParent = event.target.getAttribute('data-parent');

    document.querySelectorAll(dataParent + ' .panel-heading a').forEach(function(ele, idx) {
      var prevattr = ele.getAttribute('href');
      if(select_id.indexOf(prevattr.slice(1)) !== -1){
        if(ele.parentNode.parentNode.classList.contains('active')){
          ele.parentNode.parentNode.classList.remove("active");
        }
        else{
          ele.parentNode.parentNode.classList.add("active");
          setTimeout(() => {
            SmoothScroll.scrollTo(null, ele.parentNode.parentNode.nextSibling.id);
          }, 500);
        }
      }
      else{
        ele.parentNode.parentNode.classList.remove("active");
      }
    });

  };

  export let onClick_Acc = (event) => {
      //Add and Remove Active Class On Accordian Behalf of id
    var select_id = event.target.getAttribute("href");
    var dataParent = event.target.getAttribute('data-parent');
    document.querySelectorAll('.panel-heading a').forEach(function(ele, idx) {
      var prevattr = ele.getAttribute('href');

      if(select_id.indexOf(prevattr.slice(1)) !== -1){
        if(ele.parentNode.parentNode.classList.contains('active')){
          ele.parentNode.parentNode.classList.remove("active");
        }
        else{
          ele.parentNode.parentNode.classList.add("active");
          setTimeout(() => {
            SmoothScroll.scrollTo(null, ele.parentNode.parentNode.nextSibling.id);
          }, 500);
        }
      }
      else{
        ele.parentNode.parentNode.classList.remove("active");
        if(ele.parentNode.parentNode.nextSibling.classList.contains('in')){
          ele.parentNode.parentNode.nextSibling.classList.remove("in");
          ele.parentNode.parentNode.nextSibling.setAttribute('aria-expanded',"false")
          ele.classList.add("collapsed");
          ele.setAttribute('aria-expanded',"false")
        }
        
      }
    });
   
    //Add and remove Class On Active Sidebar link Behalf of id
    document.querySelectorAll('#sidebar-nav-menu .list-group-item').forEach(function(ele, idx) {
      var prevattr = ele.getAttribute('href');
      if(prevattr.indexOf(select_id.slice(1)) !== -1){
        if(ele.classList.contains('active')){
          ele.classList.remove("active");
        }
        else{
          ele.classList.add("active");
        }
      }
      else{
        // if(ele.getAttribute('data-parent') === dataParent)
        ele.classList.remove("active");
      }
    });
  }
