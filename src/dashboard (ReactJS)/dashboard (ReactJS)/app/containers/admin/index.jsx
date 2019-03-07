// React
import React, { Component } from 'react'
// Sass
import './style.sass'
import Fetch from "../../components/admin/testFetch";

class Admin extends Component{
    constructor(props){
        super(props);

        this.state = {
            usersOnline: 0
        }

        this.updateData = this.updateData.bind(this);
    }

    updateData(value){
        this.setState({ usersOnline: value })
    }

    render(){
        return(
           <div className='admin__wrap'>
               <div className="admin__wrap-top">
                   <div className="admin__block members-online">
                       <div className="admin__block-header">
                           <div className="block__header-info">
                               <p className='block__header-title'>Osers online</p>
                           </div>
                           <div className="block__header-settings">
                           </div>
                       </div>
                       <div className="admin__block-content">
                           <h2 className='block__content-count'>{this.state.usersOnline}</h2>
                           <span className='block__content-icon'>
                           <svg xmlns="http://www.w3.org/2000/" width='25' viewBox="0 0 640 512">
                               <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"/>
                           </svg>
                       </span>
                       </div>
                       <div className="admin__block-footer"></div>
                   </div>
                   <div className="admin__block vip-members">
                       <div className="admin__block-header">
                           <div className="block__header-info">
                               <p className='block__header-title'>VIP users</p>
                           </div>
                           <div className="block__header-settings">

                           </div>
                       </div>
                       <div className="admin__block-content">
                           <h2 className='block__content-count'>145</h2>
                           <span className='block__content-icon'>
                           <svg xmlns="http://www.w3.org/2000/" width='25' viewBox="0 0 576 512">
                               <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                           </svg>
                       </span>
                       </div>
                       <div className="admin__block-footer"></div>
                   </div>
                   <div className="admin__block banned-members">
                       <div className="admin__block-header">
                           <div className="block__header-info">
                               <p className='block__header-title'>Banned users</p>
                           </div>
                           <div className="block__header-settings">

                           </div>
                       </div>
                       <div className="admin__block-content">
                           <h2 className='block__content-count'>3</h2>
                           <span className='block__content-icon'>
                           <svg xmlns="http://www.w3.org/2000/" width='25' viewBox="0 0 512 512">
                               <path d="M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z" />
                           </svg>
                       </span>
                       </div>
                       <div className="admin__block-footer"></div>
                   </div>
                   <div className="admin__block reg-members">
                       <div className="admin__block-header">
                           <div className="block__header-info">
                               <p className='block__header-title'>New users</p>
                           </div>
                           <div className="block__header-settings">

                           </div>
                       </div>
                       <div className="admin__block-content">
                           <h2 className='block__content-count'>7</h2>
                           <span className='block__content-icon'>
                           <svg xmlns="http://www.w3.org/2000/" width='25' viewBox="0 0 640 512">
                               <path d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
                           </svg>
                       </span>
                       </div>
                       <div className="admin__block-footer"></div>
                   </div>
               </div>
               <Fetch updateData={this.updateData} />
           </div>
        )
    }
}

export default Admin