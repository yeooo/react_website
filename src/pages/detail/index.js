import React,{ Component } from 'react';
import { DetailWrapper,
          Header,
          Content } from './style';

class Detail extends Component {
  render(){
    return(
      <DetailWrapper>
        <Header>“你见过魔鬼么？” “我带你看看人性”</Header>
        <Content>
          <p>
          他演过无数大反派，可能你记不住他的名字，但只要看到他的照片一定会恍然大悟地说一句，
          </p>
          <p>
          <b>他演过无数大反派，</b>可能你记不住他的名字，但只要看到他的照片一定会恍然大悟地说一句，
          </p>
          <img
          alt =""
          src = "https://upload-images.jianshu.io/upload_images/12649257-c7f44f81517d6ff6?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp"></img>
        </Content>
      </DetailWrapper>
    )
  }
}
export default Detail;