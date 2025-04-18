import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl}=this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://images.cnbctv18.com/uploads/2024/02/mosquito-net.jpg?im=FitAndFill,width=500,height=300":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} className="btn  btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
