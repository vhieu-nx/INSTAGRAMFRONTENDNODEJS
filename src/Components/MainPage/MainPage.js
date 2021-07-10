import React, { Component } from 'react';
import Post from '../Post/Post';
import "./MainPage.css";
import uploadImage from "../../images/upload.png";
class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postArray: []
        }
    }
    componentDidMount(){
        this.getPost();
    }
    getPost = () => { //API
        const thisContext = this;
        let data = [
            {
                "postId": "123456",
                "userName": "anindya",
                "postImageURL": "https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
                "timeStamp": "12345",
                "likes": "1234"
            },
            {
                "postId": "123456",
                "userName": "anindya",
                "postImageURL": "https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
                "timeStamp": "12345",
                "likes": "1234"
            },
            {
                "postId": "123456",
                "userName": "anindya",
                "postImageURL": "https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
                "timeStamp": "12345",
                "likes": "1234"
            }
        ];
        thisContext.setState({postArray: data});
    }
    render() {
        return (
            <div>
                <div className="mainpage__container">  
                    <div className="mainpage__divider"></div>
                    <div className="fileupload">
                        <label for="file-upload" >
                            <img className="mainpage__uploadicon" src={uploadImage} />
                        </label>
                         <input onChange={this.upload} id="file-upload" type="file"/>
                     </div>
                    <div className="mainpage__divider"></div>   
                </div>
                <div className="upload_text">{this.state.progressBar}</div>
               {
                    this.state.postArray.map((item,index)=>(
                        <Post id={item.postId} userName={item.userName} postImage={item.postImageURL} likes={item.likes} />
                    ))
                }
            </div>


        );
    }
}

export default MainPage;