import styled from 'styled-components';

export const HomeWrapper = styled.div `
  margin:0 auto;
  width:960px;
  overflow:hidden;
`;

export const HomeLeft = styled.div `
  float:left;
  width:625px;
  margin-left:15px;
  padding-top:30px;
  .banner-img{
    width:625px;
    height:270px;
  }
`;

export const HomeRight = styled.div `
  float:right;
  width:240px;
`;

export const TopicWrapper = styled.div `
  padding:20px 0 10px 0;
  margin-left:-18px;
  overflow:hidden;
  border-bottom:1px solid #f1f1f1;
`;

export const TopicItem = styled.div `
  float:left;
  margin-bottom:18px;
  margin-left:18px;
  padding-right:10px;
  height:32px;
  line-height:32px;
  font-size:14px;
  color:#000;
  border:1px solid #dcdcdc;
  border-radius:4px;
  background:#f7f7f7;
  .topic-item-img{
    display:block;
    float:left;
    width:32px;
    height:32px;
    margin-right:10px;
    
  }
`;

export const ListItem = styled.div `
  padding: 20px 0;
  border-bottom:1px solid #dcdcdc;
  overflow:hidden;
  .list-img{
    display:block;
    float:right;
    width:125px;
    height:100px;
    border-radius:10px;
  }
`;

export const ListInfo = styled.div `
  width:500px;
  float:left;
  .title{
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color:#333;
  }
  .desc{
    font-size:13px;
    line-height:24px;
    color:#999;
  }
`;